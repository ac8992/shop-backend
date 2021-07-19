import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        writeReview: protectedResolver(async (_, { id, title, payload, grade }, { loggedInUser }) => {
            const item = await client.item.findUnique({
                where: {
                    id
                }
            })
            if(!item) {
                return {
                    ok: false,
                    error: "해당 상품이 존재하지 않습니다"
                }
            }
            if(grade > 6 && grade <= 0) {
                return {
                    ok: false,
                    error: "평점이 잘못되었습니다. 다시 시도해 주세요"
                }
            }
            await client.review.create({
                data: {
                    title,
                    payload,
                    grade,
                    user: {
                        connect: {
                            id: loggedInUser.id
                        }
                    },
                    item: {
                        connect: {
                            id: item.id
                        }
                    }
                }
            })
            return {
                ok: true
            }
        })
    }
}
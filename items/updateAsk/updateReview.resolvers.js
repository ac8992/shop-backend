import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        updateReview: protectedResolver(async(_, {id, title, payload, grade }, {loggedInUser}) => {
            const review = await client.review.findUnique({
                where: { id }
            })
            if (!review) {
                return {
                    ok: false,
                    error: "리뷰가 존재하지 않습니다."
                }
            }
            if (loggedInUser.id !== review.userId) {
                return {
                    ok: false,
                    error: "작성한 사용자가 아닙니다."
                }
            } else {
                await client.review.update({
                    where: {id},
                    data: {
                        title,
                        payload,
                        grade
                    }
                })
                return {
                    ok: true
                }
            }
        })
    }
}
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        updateAsk: protectedResolver(async(_, {id, title, payload, onlyMe}, {loggedInUser}) => {
            const itemAsk = await client.itemAsk.findUnique({
                where: { id }
            })
            if (!itemAsk) {
                return {
                    ok: false,
                    error: "문의가 존재하지 않습니다."
                }
            }
            if (loggedInUser.id !== itemAsk.userId) {
                return {
                    ok: false,
                    error: "작성한 사용자가 아닙니다."
                }
            } else {
                await client.itemAsk.update({
                    where: {id},
                    data: {
                        title,
                        payload,
                        ...(onlyMe && {onlyMe}),
                    }
                })
                return {
                    ok: true
                }
            }
        })
    }
}
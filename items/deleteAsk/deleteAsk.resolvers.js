import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        deleteAsk: protectedResolver(async(_, {id}, {loggedInUser}) => {
            const itemAsk = await client.itemAsk.findUnique({
                where: {id}
            })
            if(!itemAsk) {
                return {
                    ok: false,
                    error: "리뷰가 존재하지 않습니다."
                }
            }
            console.log(loggedInUser.id, itemAsk.userId)
            if(loggedInUser.id !== itemAsk.userId) {
                return {
                    ok: false,
                    error : "작성한 사용자가 아닙니다."
                }
            } else {
                await client.itemAsk.delete({
                    where: {id}
                })
                return {
                    ok: true
                }
            }
            
        })
    }
}
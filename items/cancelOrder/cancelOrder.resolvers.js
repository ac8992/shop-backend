import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        cancelOrder: protectedResolver(async(_, {id, reason}, {loggedInUser}) => {
            const order = await client.order.findUnique({
                where: {id}
            })
            if(!order) {
                return {
                    ok: false,
                    error: "주문정보가 잘못되었습니다"
                }
            }
            await client.order.update({
                where : {
                    id
                },
                data: {
                    orderState : "주문취소",
                    etc: reason
                }
            })
            return {
                ok: true
            }
        })
    }
}
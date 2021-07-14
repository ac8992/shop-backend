import client from "../../client";
import { protectedResolver } from "../../users/users.utils";


export default {
    Query: {
        seeOrder: protectedResolver(async(_, __, {loggedInUser}) => {
            console.log("seeOrder")
            const order = await client.order.findMany({
                where: {
                    userId: loggedInUser.userId
                }
            })
            if(!order) {
                return {
                    ok: false,
                    error: "주문한 상품이 존재하지 않습니다"
                }
            }
            return {
                ok: true,
                order,
            }
        })
    }
}
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import dateformat from "dateformat";

export default {
    Mutation: {
        orderItem: protectedResolver(async (_, { itemCode, itemName, price, color, size }, { loggedInUser }) => {
            const item = await client.item.findUnique({
                where:{
                    itemCode
                }
            })
            if(!item) {
                return {
                    ok: false,
                    error: "상품이 존재하지 않거나 일시적인 오류로 인해 주문이 불가능합니다."
                }
            }
            const date = dateformat(new Date(), "yyyymmdd");
            const randNumber = Math.floor(Math.random() * (99999 - 0)) + 0
            const orderCode = `s${date}-${loggedInUser.id}-${randNumber}`
            console.log(orderCode)
            await client.order.create({
                data: {
                    itemCode,
                    itemName,
                    price,
                    color,
                    size,
                    userId: loggedInUser.userId,
                    orderCode,
                    // payType,
                    thum: item.thum,
                }
            })
            return {
                ok: true
            }
        })
    }
}
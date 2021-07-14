import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        addCart: protectedResolver(async(_, {itemCode, color, size}, {loggedInUser}) => {
            const item = await client.item.findUnique({
                where: {itemCode}
            })
            if(!item) {
                return null;
            }
            if(!item.size.includes(size) || !item.color.includes(color)) {
                return {
                    ok: false,
                    error: "상품에 대한 정보가 잘못되었습니다."
                }
            } 
            await client.cart.create({
                data: {
                    userId: loggedInUser.userId,
                    itemCode,
                    itemName: item.itemName,
                    price: item.price,
                    color,
                    size,
                }
            })
            return {
                ok: true
            }
        })
    }
}
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Query: {
        seeCart: protectedResolver(async(_, __, {loggedInUser}) => {
            const cart = await client.cart.findMany({
                where: {
                    userId: loggedInUser.userId
                }
            })
            if(!cart) {
                return {
                    ok: false,
                    error: "장바구니에 등록된 상품이 없습니다."
                }
            }
            return {
                ok: true,
                cart,
            }
        })
    }
}
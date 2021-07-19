import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        deleteCart: protectedResolver(async(_, {id}, {loggedInUser}) => {
            const cart = await client.cart.findUnique({
                where : {id}
            })
            if(!cart) {
                return {
                    ok: false,
                    error: "해당 제품이 카트에 존재하지 않습니다"
                }
            }
            await client.cart.delete({
                where: {id}
            })
            return {
                ok: true
            }
        })
    }
}
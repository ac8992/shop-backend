import { gql } from "apollo-server-express";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        writeAsk: protectedResolver(async (_, { id, title, payload, onlyMe }, { loggedInUser }) => {
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
            await client.itemAsk.create({
                data: {
                    title,
                    payload,
                    ...(onlyMe && {onlyMe}),
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
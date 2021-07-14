import client from "../../client"

export default {
    Mutation: {
        addItem: async(_, { itemCode,
            itemName,
            price,
            color,
            size,
            category,
            thum,
            photo }, { loggedInUser }) => {
            try {
                const authOk = await client.user.findUnique({
                    where: {
                        id: loggedInUser.id
                    }
                })
                const itemCheck = await client.item.findUnique({
                    where: {
                        itemCode
                    }
                })
                if(itemCheck) {
                    return {
                        ok: false,
                        error: "이미 등록된 상품 코드입니다."
                    }
                }
                if (authOk.auth === 1) {
                    await client.item.create({
                        data: {
                            itemCode,
                            itemName,
                            price,
                            color,
                            size,
                            category,
                            thum,
                            photo
                        }
                    })
                    return {
                        ok: true,
                    }
                } else {
                    return {
                        ok: false,
                        error: "접근 권한이 없습니다."
                    };
                }
            } catch (e) {
                return {
                    ok: false,
                    error: "상품등록에 실패하였습니다."
                }
            }
        }

    }
}
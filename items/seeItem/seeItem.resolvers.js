import client from "../../client";

export default {
    Query: {
        seeItem: async() => {
            const items = await client.item.findMany({orderBy: {
                createdAt: "desc"
            }})
            const totalitems = await client.item.count()
            if(!items) {
                return {
                    ok: false,
                    error: "등록된 상품이 존재하지 않습니다."
                }
            }
            return {
                ok: true,
                items,
                totalPages: Math.ceil(totalitems / 30),
            }
        }
    }
}
import client from "../../client"

export default {
    Query: {
        seeAsk:(async(_, {itemId}) => {
            const item = await client.item.findUnique({
                where: {
                    id: itemId
                }
            })
            if(!item) {
                return {
                    ok: false,
                    error: "해당 상품이 존재하지 않습니다."
                }
            }
            const itemAsk = await client.itemAsk.findMany({
                where: {
                    itemId
                }
            })
            const totalReview = await client.itemAsk.count({where:{itemId}})
            return {
                ok: true,
                itemAsk,
                totalPages: Math.ceil(totalReview / 10)
            }
        })
    }
}
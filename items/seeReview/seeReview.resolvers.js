import client from "../../client"

export default {
    Query: {
        seeReview:(async(_, {itemId}) => {
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
            const review = await client.review.findMany({
                where: {
                    itemId
                }
            })
            const totalReview = await client.review.count({where:{itemId}})
            return {
                ok: true,
                review,
                totalPages: Math.ceil(totalReview / 10)
            }
        })
    }
}
import client from "../../client";

export default {
    Query : {
        seeNotice: async() => {
            const notice = await client.notice.findMany({orderBy: {
                createdAt: "desc"
            }})
            const totalnotices = await client.notice.count()
            if(!notice) {
                return {
                    ok: false,
                    error: "작성된 공지사항이 존재하지 않습니다."
                }
            }
            return {
                ok: true,
                notice,
                totalPages: Math.ceil(totalnotices / 15),
            }
        }
    }
}
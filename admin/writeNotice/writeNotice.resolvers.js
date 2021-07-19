import client from "../../client"

export default {
    Mutation: {
        writeNotice: (async(_, {title, noticeText}, {loggedInUser}) => {
            const adminCheck = await client.user.findUnique({
                where: {
                    id : loggedInUser.id
                }
            })
            if(adminCheck.auth == 1) {
                await client.notice.create({
                    data: {
                        title,
                        noticeText
                    }
                })
                return {
                    ok: true
                }
            } else {
                return {
                    ok: false,
                    error : "작성 권한이 없습니다."
                }
            }
        })
    }
}
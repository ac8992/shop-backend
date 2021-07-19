import client from "../../client"

export default {
    Mutation: {
        deleteNotice: (async(_, {id}, {loggedInUser}) => {
            const adminCheck = await client.user.findUnique({
                where: {
                    id : loggedInUser.id
                }
            })
            if(adminCheck.auth == 1) {
                await client.notice.delete({
                    where: {
                        id
                    }
                })
                return {
                    ok: true
                }
            } else {
                return {
                    ok: false,
                    error : "삭제 권한이 없습니다."
                }
            }
        })
    }
}
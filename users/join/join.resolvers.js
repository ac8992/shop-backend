import client from "../../client"
import bcrypt from "bcrypt";

export default {
    Mutation: {
        join: async (_, { userId,
            password,
            name,
            email,
            address,
            phone }) => {
            try {
                const existUser = await client.user.findFirst({
                    where: {
                        OR: [
                            { userId }, { email }
                        ]
                    }
                })
                if(existUser) {
                    return new Error("이미 가입된 아이디 또는 이메일 입니다.")
                }
                const HashPassword = await bcrypt.hash(password, 10)
                await client.user.create({
                    data: {
                        userId,
                        password: HashPassword,
                        name,
                        email,
                        address,
                        phone,
                    }
                })
                return {
                    ok: true
                }
            } catch(e) {
                return {
                    ok: false,
                    error: "회원가입에 실패하였습니다."
                }
            }
        }
    }
}
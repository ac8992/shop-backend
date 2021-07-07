import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export default {
    Mutation: {
        login: async (_, {username, password}) => {
            const user = await client.user.findFirst({where: {
                        username
                    }})
            if (!user) {
                return {ok: false, error: "등록되지 않은 사용자 입니다."};
            }
            const passwordOk = await bcrypt.compare(password, user.password)
            if (!passwordOk) {
                return {ok: false, error: "잘못된 비밀번호 입니다."};
            }
            const token = await jwt.sign({
                id: user.id
            }, process.env.SECRET_KEY);
            return {ok: true, token};
        }
    }
}

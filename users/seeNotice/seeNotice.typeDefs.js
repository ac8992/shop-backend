import { gql } from "apollo-server-express";

export default gql`
    type NoticeResult {
        ok: Boolean!,
        notice: [Notice],
        error: String,
        totalPages: Int,
    }
    type Query {
        seeNotice:NoticeResult!
    }
`
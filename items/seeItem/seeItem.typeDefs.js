import { gql } from "apollo-server-express";

export default gql`
    type SeeItemResult {
        ok: Boolean!
        items: [Item]
        error:String
        totalPages:Int
    }
    type Query {
        seeItem:SeeItemResult!
    }
`
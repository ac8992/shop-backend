import { gql } from "apollo-server-express";

export default gql`
    type SeeAskResult {
        ok: Boolean!
        itemAsk: [ItemAsk]
        error:String
        totalPages:Int
    }
    type Query {
        seeAsk(itemId:Int!):SeeAskResult!
    }
`
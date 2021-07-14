import { gql } from "apollo-server-express";

export default gql`
    type seeOrderResult {
        ok: Boolean!
        order: [Order]
        error:String
    }
    type Query {
        seeOrder:seeOrderResult!
    }
`
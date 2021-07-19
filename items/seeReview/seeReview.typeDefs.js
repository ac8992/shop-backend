import { gql } from "apollo-server-express";

export default gql`
    type SeeReviewResult {
        ok: Boolean!
        review: [Review]
        error:String
        totalPages:Int
    }
    type Query {
        seeReview(itemId:Int!):SeeReviewResult!
    }
`
import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        updateReview(id:Int!, title:String, payload:String!, grade:Int!):MutationResonse!
    }
`
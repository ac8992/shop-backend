import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        cancelOrder(id:Int!, reason:String!):MutationResonse!
    }
`
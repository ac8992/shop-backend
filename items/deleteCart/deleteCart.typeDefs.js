import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        deleteCart(id:Int!):MutationResonse!
    }
`
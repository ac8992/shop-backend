import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        addCart(itemCode:String!, color:String!, size:String!):MutationResonse!
    }
`
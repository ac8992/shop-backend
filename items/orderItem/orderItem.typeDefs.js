import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        orderItem( itemCode:String!, itemName:String!, price:String!, color:String!, size:String!, etc:String): MutationResonse!
    }
`
import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        writeAsk(id:Int!,title:String!, payload:String!, onlyMe:Boolean):MutationResonse!
    }
`
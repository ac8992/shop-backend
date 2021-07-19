import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        updateAsk(id:Int!, title:String, payload:String!, onlyMe:Boolean):MutationResonse!
    }
`
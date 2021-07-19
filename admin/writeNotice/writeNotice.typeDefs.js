import { gql } from "apollo-server-express";

export default gql`
    type Mutation {
        writeNotice(title:String!, noticeText:String!):MutationResonse!
    }
`
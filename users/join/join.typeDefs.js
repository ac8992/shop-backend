import {gql} from "apollo-server";

export default gql`
    type Mutation {
        join(userId:String!, password:String!, name:String!, email:String!, address:String!, phone:String!):MutationResonse!
    }
`
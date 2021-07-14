import { gql } from "apollo-server";

export default gql`
    type Mutation {
        addItem(
            itemCode: String!,
            itemName: String!,
            price: String!,
            color: [String]!,
            size: [String]!,
            category: String!,
            thum: String,
            photo: String
        ):MutationResonse!
    }
`
import {gql} from "apollo-server";

export default gql`
    type Item{
        id: Int!
        itemCode: String!
        itemName: String!
        price: Int!
        color: String!
        size: String!
        category: String!
        thum: String
        photo: String
    }
`;


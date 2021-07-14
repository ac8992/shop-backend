import {gql} from "apollo-server";

export default gql`
    type Item{
        id: Int!
        itemCode: String!
        itemName: String!
        price: String!
        color: [String]!
        size: [String]!
        category: String!
        thum: String
        photo: String
    }

    type Order {
        id:Int!
        itemCode: String!
        itemName: String!
        price: String!
        color: String!
        size: String!
        userId: String!
        orderCode: String!
        orderState: String!
        payType: String!
        thum: String
    }

    type Cart {
        id: Int!
        userId: String!
        itemCode: String!
        itemName: String!
        price: String!
        color: String!
        size: String!
        thum: String
    }
`;


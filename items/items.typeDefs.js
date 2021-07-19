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
        review: Review
        createdAt: String!
        updatedAt: String!
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
        etc: String
        createdAt: String!
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

    type Review {
        id: Int!
        item: Item!
        title: String
        payload: String!
        grade: Int!
        createdAt: String!
        updatedAt: String!
    }

    type ItemAsk {
        id: Int!
        item: Item!
        title: String
        payload: String!
        onlyMe: Boolean
        createdAt: String!
        updatedAt: String!
    }
`;


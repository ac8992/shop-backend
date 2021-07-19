import { gql } from "apollo-server-express";

export default gql`
    type Notice {
        id: Int!
        title: String!
        noticeText: String!
        createdAt: String!
        updatedAt: String!
    }
`
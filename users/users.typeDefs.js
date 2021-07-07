import {gql} from "apollo-server";

export default gql`
    type User{
        id:Int!
        name:String!
        userId:String!
        email:String!
        address: String!
        phone: String!
        createdAt:String!
        updatedAt:String!
        auth: Int!
        # cart: [Cart]
        # isMe: Boolean!
    }
    type Query {
        seeProfile(username:String!):User!
    }
`;
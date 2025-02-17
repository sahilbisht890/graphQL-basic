const typeDefs = `type Todo { 
        id: ID!,
        todo: String! ,
        completed: Boolean! ,
        userId: ID!,
        fullName : String,
        user : User
}
type User {
        id: ID!,
        firstName: String!,
        lastName: String!,
        age: Int,
        gender: String!,
        email: String!,
        phone: String!,
}

type Query {
    getTodos: [Todo]! ,
    getAllUsers : [User]
}`;

module.exports = typeDefs;

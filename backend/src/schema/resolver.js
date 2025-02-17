const todos = require('../dummyData/todos')
const users = require('../dummyData/user')

const resolvers = {
    Todo : {
        user : async (todo) => {
            const userDetails = users.find((user) => user.id == todo.userId)
            return userDetails
        },
        fullName : async (todo) => {
            const userDetails = users.find((user) => user.id == todo.userId)
            if(!userDetails){
                return ''
            }
            return `${userDetails.firstName} ${userDetails.lastName}`
        }
    },
    Query : {
        getTodos : () =>  todos ,
        getAllUsers : () => users
    }   

}

module.exports = resolvers
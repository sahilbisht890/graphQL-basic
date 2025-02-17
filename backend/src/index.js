const express = require('express')
const { ApolloServer } = require('@apollo/server')
const bodyPraser = require('body-parser')
const cors = require('cors')
const {expressMiddleware} = require('@apollo/server/express4')
const typeDefs = require('./schema/typeDef.js')
const resolvers = require('./schema/resolver')



async function startApolloServer() { 
    const app = express()
    app.use(cors())
    app.use(bodyPraser())
    const server = new ApolloServer({
        typeDefs : typeDefs,
        resolvers,
    })

    await server.start()

    app.use('/graphql', expressMiddleware(server))
    app.listen(8000, () => {
        console.log('Server is running on port 8000')
    })
}

startApolloServer();
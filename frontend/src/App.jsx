import { useState } from 'react'
import TodoPage from './components/Todo'
import './App.css'
import { ApolloClient , InMemoryCache , ApolloProvider} from '@apollo/client'

function App() {
     
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache()
  })

  return (
    <>
      <ApolloProvider client={client}>
      <TodoPage/>
      </ApolloProvider>
    </>
  )
}

export default App


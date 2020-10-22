const { ApolloServer, gql } = require('apollo-server-express')
const fs = require('fs')
const path = require('path')
const resolvers = require('./resolvers')
const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql'))

const jwt = require('jsonwebtoken')


//graphql
//Query = trazer dados
//Mutation = altetar dados, criar produto novo, remover produto
//input = dados para entrada
const typeDefs = gql`${schema}`


const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    if (req.headers && req.headers.authorization) {
      const header = req.headers.authorization
      const headerParts = header.split(' ')
      const secret = 'blablablablabla'
      try{
        const payload = jwt.verify(headerParts[1], secret)
        return { user: payload.user}
      }catch (err) {}
    }
    return {
    }
  }
})

module.exports = graphqlServer
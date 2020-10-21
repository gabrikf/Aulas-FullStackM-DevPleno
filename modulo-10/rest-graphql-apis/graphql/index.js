const { ApolloServer, gql } = require('apollo-server-express')
const fs = require('fs')
const path = require('path')
const resolvers = require('./resolvers')
const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql'))
//graphql
//Query = trazer dados
//Mutation = altetar dados, criar produto novo, remover produto
//input = dados para entrada
const typeDefs = gql`${schema}`


const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
})

module.exports = graphqlServer
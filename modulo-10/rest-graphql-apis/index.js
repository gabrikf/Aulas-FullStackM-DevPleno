const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const graphqlServer = require('./graphql')

//rest
app.use(bodyParser.json())
app.use(routes)

//graphQl


graphqlServer.applyMiddleware({ app })


app.listen(3000, (err) => {
  if(err){
    console.log('Not possible to listen on port 3000')
  }else{
    console.log('Server running on port 3000')
  }
})
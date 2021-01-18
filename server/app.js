const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// noinspection JSValidateTypes
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true
}))

app.listen(4000,()=>{
    console.log("listening for requests...");
})
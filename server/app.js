const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://pepe:test123@ds113122.mlab.com:13122/graphql-test');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
})



app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log('Now Listening on port: 4000')
});

    
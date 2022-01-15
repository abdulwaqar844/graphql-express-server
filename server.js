var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var schema =require('./schema/schema')
var rootValue =require('./resolver/resolver')
var mongoose = require("mongoose");
// mongoose
//   .connect(
   
//   )
//   .then(() => console.log("database connected"))
//   .catch((err) => console.log(err));

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

var { buildSchema } = require("graphql");
var schema = buildSchema(`

  type Movie{
    movieid:String!
      name:String!
      genre:String!
      year:String!
  } 
   type Query {
    movies: [Movie!]
  }
   type Mutation {
       createMovie(name: String! genre:String! year:String!): Movie
     }
`);
module.exports = schema;
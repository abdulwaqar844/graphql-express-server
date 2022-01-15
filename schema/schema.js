var { buildSchema } = require("graphql");
var schema = buildSchema(`

  type Movie{
      id:String!
      name:String!
      genre:String!
      year:String!
  } 
   type Query {
    movies: [Movie!]
  }
   type Mutation {
       createMovie(name: String! genre:String! year:String!): Movie
       deleteMovie(id:String!):String !
     }
`);
module.exports = schema;

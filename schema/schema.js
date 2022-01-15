var { buildSchema } = require("graphql");
var schema = buildSchema(`
  type Query {
    movies: [Movie!]
  }
  type Movie{
      name:String!
      genre:String!
      year:String!
  }
`);
module.exports=schema 
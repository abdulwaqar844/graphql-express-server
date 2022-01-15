const movieList=[
    {
        'name':"chal mera put 1",
        'genre':"comedy",
        'year':'2018'
    },  {
        'name':"chal mera put 2",
        'genre':"comedy",
        'year':'2019'
    } , {
        'name':"chal mera put 3",
        'genre':"comedy",
        'year':'2020'
    }
]
var resolver = {
    movies: () => {
      return movieList;
    },
  };
  module.exports=resolver
const movieList = [
  { movieid: 1, name: "chal mera put 1", genre: "comedy", year: "2018" },
  { movieid: 2, name: "chal mera put 2", genre: "comedy", year: "2019" },
  { movieid: 3, name: "chal mera put 3", genre: "comedy", year: "2020" },
];
var resolver = {
  movies: () => {
    return movieList;
  },
  createMovie: ({ name, genre, year }) => {
    const movieid = new Date().getTime();
    const movie = {
      movieid,
      name,
      genre,
      year,
    };
    movieList.push(movie);
    return movie;
  },
};
module.exports = resolver;

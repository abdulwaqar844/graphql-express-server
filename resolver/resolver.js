const movieList = [
  { id: 1, name: "chal mera put 1", genre: "comedy", year: "2018" },
  { id: 2, name: "chal mera put 2", genre: "comedy", year: "2019" },
  { id: 3, name: "chal mera put 3", genre: "comedy", year: "2020" },
];
var resolver = {
  movies: () => {
    return movieList;
  },
  createMovie: ({ name, genre, year }) => {
    const id = new Date().getTime();
    const movie = {
      id,
      name,
      genre,
      year,
    };
    movieList.push(movie);
    return movie;
  },
  deleteMovie: ({ id }) => {
      console.log(id)
     movieList.filter((movie)=>movie.id!=id);
    
    return `Delete ${id}`;
  },
};
module.exports = resolver;

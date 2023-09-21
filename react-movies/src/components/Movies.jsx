export function ListOfMovies({ movies }) {
  return movies.map((movie) => (
    <li key={movie.id}>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title} />
    </li>
  ));
}
export function RenderNoMovies() {
  return <p>No se encontraron resultados</p>;
}

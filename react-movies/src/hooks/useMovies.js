import resultMovies from "../mocks/results.json";
import noResultMovies from "../mocks/no-results.json";
import { useCallback, useMemo, useState } from "react";
import { searchMovie } from "../services/movies";

export function useMovies({ search, sortYear }) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [prevSearch, setPrevSearch] = useState();
  const movies = response.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const sortedMovie = useMemo(() => {
    console.log("render memo");
    if (mappedMovies === undefined) {
      return;
    }
    return sortYear
      ? [...mappedMovies].sort((a, b) => b.year - a.year)
      : mappedMovies;
  }, [sortYear, movies]);
  /*const sortedMovie = sortYear
    ? [...mappedMovies].sort((a, b) => b.year - a.year)
    : mappedMovies;*/

  const getMovies = useCallback(
    async ({ search }) => {
      console.log("callbsv");
      if (prevSearch == search) {
        return;
      } else {
        setPrevSearch(search);
      }
      if (search) {
        //setResponse(resultMovies);
        try {
          setLoading(true);
          setError(null);
          const resultMovies = await searchMovie({ search });
          setResponse(resultMovies);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      } else {
        setResponse(noResultMovies);
      }
    },
    [prevSearch]
  );

  return { movies: sortedMovie, getMovies, loading };
}

import { useCallback, useMemo, useState } from "react";
import "./App.css";

import { ListOfMovies, RenderNoMovies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

function App() {
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortYear, setSortYear] = useState(false);
  const { movies, getMovies, loading } = useMovies({ search, sortYear });
  //const searchValue = useRef();

  const hasMovies = useMemo(() => {
    return movies != undefined ? movies.length > 0 : false;
  }, [movies]);
  //const hasMovies = movies != undefined ? movies.length > 0 : false;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.trim() == "") {
      setError("Ingrese Valor");
      return;
    }
    getMovies({ search });
    //get all objects by name in form
    const fields = Object.fromEntries(new FormData(event.target));
    console.log(fields);
    console.log(fields["searchValue"]);
  };
  const debouncedMovies = useCallback(
    debounce((searchValue) => {
      getMovies({ search: searchValue });
      console.log("search");
    }, 1000),
    [debounce]
  );
  const handleChange = (event) => {
    let searchValue = event.target.value;
    setSearch(searchValue);
    if (searchValue.length == 0) {
      setError("Ingrese Valor");
    } else {
      setError(null);
      debouncedMovies(searchValue);
    }
  };
  const handleChangeSort = () => {
    setSortYear(!sortYear);
  };
  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          {/*<input placeholder="Nombre para buscar" ref={searchValue} />*/}
          <input
            placeholder="Nombre para buscar"
            name="searchValue"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
        <section className="sort_section">
          <label htmlFor="sort">Ordenar Peliculas por año </label>
          <input
            id="sort"
            type="checkbox"
            checked={sortYear}
            onChange={handleChangeSort}
          />
        </section>

        {error && <p>{error}</p>}
      </header>
      <main>
        {loading ? (
          <p>Cargando...</p>
        ) : hasMovies ? (
          <ul className="movies">{<ListOfMovies movies={movies} />} </ul>
        ) : (
          <RenderNoMovies />
        )}
      </main>
    </>
  );
}

export default App;

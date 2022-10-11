import React, { useEffect, useState } from "react";
import "./App.css";
import MovieComponent from "./Components/MovieComponent";

const api =
  "https://api.themoviedb.org/3/movie/popular?api_key=56b1d7398d1dc64df526a3995b2c8425";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    if (query === "") {
      return 1;
    }
    try {
      const link = `https://api.themoviedb.org/3/search/movie?api_key=56b1d7398d1dc64df526a3995b2c8425&query=${query}`;
      const res = await fetch(link);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <nav className="navbar bg-dark col">
          <div className="container">
            <a
              className="navbar-brand col"
              style={{ color: "white" }}
              href="sa"
            >
              My Movies
            </a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: "white" }}
                onClick={searchMovie}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          {movies.length === 0 ? (
            <h1
              className="animate__animated animate__headShake"
              style={{ color: "white", overflow: "hidden" }}
            >
              Not Found
            </h1>
          ) : (
            movies.map((movie) => (
              <div className="col-md-4" key={movie.id}>
                <MovieComponent details={movie} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

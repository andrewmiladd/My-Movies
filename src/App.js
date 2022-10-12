import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import MovieComponent from "./Components/MovieComponent";
import Login from "./Components/Login";
import ProtectedRoutes from "./Components/Auth";

const api =
  "https://api.themoviedb.org/3/movie/popular?api_key=56b1d7398d1dc64df526a3995b2c8425";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

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

  return (
    <div>
      <NavBar
        movies={movies}
        query={query}
        setQuery={setQuery}
        setMovies={setMovies}
        searchMovie={searchMovie}
        api={api}
      />
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
                <Routes>
                  <Route element={<ProtectedRoutes/>}>
                  <Route path="/"element={<MovieComponent details={movie} />}/> 
                  </Route>
                </Routes>
              </div>
            ))
          )}

          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

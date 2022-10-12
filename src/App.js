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

  const topRated = () => {
    let sorted = movies.sort((a, b) => {
      if (a.vote_average > b.vote_average) {
        return -1;
      } else if (a.vote_average < b.vote_average) {
        return 1;
      } else {
        return 0;
      }
    });
    setMovies([...sorted]);
  };

  return (
    <div>
      <NavBar
        movies={movies}
        query={query}
        setQuery={setQuery}
        setMovies={setMovies}
        api={api}
        topRated={topRated}
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
                  <Route element={<ProtectedRoutes />}>
                    <Route
                      path="/"
                      element={<MovieComponent details={movie} />}
                    />
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

import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const searchMovie = async (e) => {
    e.preventDefault();
    if (props.query === "") {
      return 1;
    }
    try {
      const link = `https://api.themoviedb.org/3/search/movie?api_key=56b1d7398d1dc64df526a3995b2c8425&query=${props.query}`;
      const res = await fetch(link);
      const data = await res.json();
      props.setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="row">
        <nav className="navbar bg-dark">
          <div className="container">
            <a className="col navbar-brand " style={{ color: "white" }} href="/">
              My Movies
            </a>
            <button className=" col-1 btn btn-success" onClick={props.topRated} style={{'margin':'10px'}}>Top Rated </button>
            <form className="d-flex" role="search">
              
              <input
                className="col form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
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
            <Link to="/login" className="col-lg-1">
              Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;

import React  from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <form className="row g-3">
        <label
          className="form-label"
          htmlFor="username"
          style={{ color: "white" }}
        >
          Username
        </label>
        <input type="text " className="form-control" id="username" />
        <label
          className="form-label"
          htmlFor="password"
          style={{ color: "white" }}
        >
          Password
        </label>
        <input type="password" className="form-control" id="password" />

        <Link to="/">
          <button className="btn btn-success form-control">Login</button>
        </Link>
      </form>
    </div>
  );
}
export default Login;

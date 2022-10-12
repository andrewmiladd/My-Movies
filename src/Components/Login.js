import React from "react";


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

        <button className="btn btn-primary" onClick={() => {}}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;

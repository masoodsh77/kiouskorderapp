import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/img/logo.png";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setError(false);
          console.log(res.status);
          localStorage.setItem("token", res.data.jwt);
          localStorage.setItem("USID", res.data.user.id);
          props.history.push("/dashboard");
        } else {
          setError(true);
          setErrorMessage("نام کاربری یا رمز عبور شما اشتباه است");
        }
      }).catch(err=>{
        setError(true);
          setErrorMessage("نام کاربری یا رمز عبور شما اشتباه است");
      });
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center login">
      <div className="loginForm">
        <div className="w-100 d-flex justify-content-center mb-4">
          <img src={logo} alt="" width="60px" />
        </div>
        <form onSubmit={handleSubit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="نام کاربری"
              value={username}
              name={username}
              onChange={handleUsername}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="رمز عبور"
              value={password}
              name={password}
              onChange={handlePassword}
            />
          </div>
          <div className="d-grid gap-2 mb-3">
            <button className="btn btn-primary" type="submit">
              ورود
            </button>
          </div>
        </form>
        {error ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Login);

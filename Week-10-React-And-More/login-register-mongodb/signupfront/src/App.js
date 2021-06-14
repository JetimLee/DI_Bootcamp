import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };
  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const registered = {
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));
    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="container">
        <div className="form-div">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="full name"
              onChange={changeFullName}
              className="form-control form-group"
            ></input>

            <input
              type="text"
              placeholder="username"
              onChange={changeUserName}
              className="form-control form-group"
            ></input>

            <input
              type="email"
              placeholder="email"
              onChange={changeEmail}
              className="form-control form-group"
            ></input>
            <input
              type="password"
              placeholder="password"
              onChange={changePassword}
              className="form-control form-group"
            ></input>
            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="submit"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

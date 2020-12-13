import React, { useState, useContext } from "react";
import {AuthContext} from "./App";
import { useHistory } from "react-router-dom";
function LoginComponent(props) {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [isDisabled, changeDisabled] = useState(true);
  const history = useHistory();
  const {authMethods,setState} = useContext(AuthContext);
  function toggleDisabled() {
    if (email !== "" && password !== "") {
      changeDisabled(false);
    } else {
      changeDisabled(true);
    }
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "email":
        changeEmail(event.target.value);
        toggleDisabled();
        break;
      case "password":
        changePassword(event.target.value);
        toggleDisabled();
        break;
      default:
        break;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    authMethods.signin(email, password,setState);
    
  }

  return (
    <form className="box">
      <input
        type="email"
        value={email}
        name="email"
        onChange={handleChange}
        placeholder="e.g. bob@gmail.com"
        className="input"
        required
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="*******"
        required
      />
      <button type="submit" onClick={handleSubmit} disabled={isDisabled}>
        Login
      </button>
    </form>
  );
}

export default LoginComponent;

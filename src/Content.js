import React, { useContext } from "react";
import { AuthContext } from "./App";
import LoginComponent from "./loginComponent";
import LoggedComponent from "./loggedComponent";
export default function Content() {
  const { authMethods, setState, state } = useContext(AuthContext);
  console.log("content",state.user);

  return <div>213{state.user ? <LoggedComponent /> : <LoginComponent />}</div>;
}

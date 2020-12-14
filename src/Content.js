import React, { useContext } from "react";
import { AuthContext } from "./App";
import LoginComponent from "./loginComponent";
import LoggedComponent from "./loggedComponent";
export default function Content() {
  const { state } = useContext(AuthContext);
  

  return <div>content{state ? <LoggedComponent /> : <LoginComponent />}</div>;
}

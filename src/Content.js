import React, { useContext } from "react";

import LoginComponent from "./loginComponent";
import LoggedComponent from "./loggedComponent";
import {AuthContext} from './AuthContext'
export default function Content(props) {
  const { state } = useContext(AuthContext);
  

  return <>content{state ? <LoggedComponent /> : <LoginComponent />}</>;
}

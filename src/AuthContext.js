import React, { useState, useEffect } from "react";
import authMethods from "./firebaseAuth";
import { auth } from "./firebaseIni";
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, setState] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && !state) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authMethods, state }}>
      {props.children}   
    </AuthContext.Provider>
  );
}
export {AuthProvider,AuthContext}

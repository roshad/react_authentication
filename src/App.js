import React, { useState, useEffect } from "react";

import Content from "./Content";
import { auth } from "./firebaseIni";
import authMethods from "./firebaseAuth";
const AuthContext = React.createContext();

function App() {
  const [state, setState] = useState(false);
  useEffect(() => {
      
      auth.onAuthStateChanged((user) => {
        console.log("onAuth",state, user);
        if (user && !state) {
          setState(true);
        }else {setState(false)}
      });
     
  },[]);

  return (
    <AuthContext.Provider value={{ authMethods, state }}>
      <Content />
      123
    </AuthContext.Provider>
  );
}

export { AuthContext, App };

import React, { useState, useEffect } from "react";

import Content from "./Content";
import { auth } from "./index";
import authMethods from "./firebaseAuth";
const AuthContext = React.createContext();

class App extends React.Component {
  state = { user: false };
  componentDidMount() {
    if (!this.state.user) {
      auth.onAuthStateChanged((user) => {
        console.log(this.state.user, user);
        if (user && !this.state.user) {
          this.setState({ user: true });
        }
      });
    }
  }
  render() {
    return (
      <AuthContext.Provider value={{ authMethods, state: this.state }}>
        <Content />
        123
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, App };

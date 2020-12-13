import React,{useState} from "react";

import Content from './Content'

import authMethods from "./firebaseAuth";
const AuthContext = React.createContext();

function App(props) {
   const [state,setState]=useState()
   console.log("refresh")
  return (
  <AuthContext.Provider value={{authMethods,setState}}>
      <Content/>
  </AuthContext.Provider>
  )
}


export {AuthContext,App};
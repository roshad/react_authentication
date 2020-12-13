import React, { useContext } from "react";
import {AuthContext}from './App'
import LoginComponent from "./loginComponent";
import LoggedComponent from "./loggedComponent";
export default function Content(){
    const {authMethods}=useContext(AuthContext)
    console.log("currentuser",authMethods.logged)
    return (
        <>
        {authMethods.logged?<LoggedComponent/>:<LoginComponent/>}
        </>
    )
}
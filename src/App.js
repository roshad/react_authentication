import React, { useState, useEffect } from "react";

import Content from "./Content";

import {AuthProvider} from './AuthContext'


function App(props) {
  

  return (
    <AuthProvider >
      <Content />      
    </AuthProvider>
  );
}

export default  App ;

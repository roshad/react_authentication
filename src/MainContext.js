import React, {useState} from "react"

import authMethods from './firebaseAuth'

const MainContext = React.createContext(authMethods);

function MainContextProvider({children}) {
    const [jwt, setJwt] = useState('');

    return (
        <MainContext.Provider >
            {children}
        </MainContext.Provider>
    ) 
}

export {MainContextProvider, MainContext}

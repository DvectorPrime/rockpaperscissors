import {React, createContext, useState} from 'react'

export const UserChoiceContext = createContext();

export const UserChoiceContextProvider = ({children}) => {
    const [userChoice, setUserChoice] = useState("");

    return(
        <UserChoiceContext.Provider value={{userChoice, setUserChoice}}>
            {children}
        </UserChoiceContext.Provider>
    )
}
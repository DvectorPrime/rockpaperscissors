import {React, createContext, useState} from "react"

export const PhaseContext = createContext();

export const PhaseContextProvider = ({children}) => {
    const [phase, setPhase] = useState(1)

    return (
        <PhaseContext.Provider value={{phase, setPhase}}>
            {children}
        </PhaseContext.Provider>
    )
}
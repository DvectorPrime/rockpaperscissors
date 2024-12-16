import React from "react";
import Main from "./Components/Main"
import { ScoreContextProvider } from "./Context/ScoreContext";
import { PhaseContextProvider } from "./Context/PhaseContext";
import { UserChoiceContextProvider } from "./Context/UserChoiceContext";

function App() {
  return(
    <PhaseContextProvider>
      <ScoreContextProvider>
        <UserChoiceContextProvider>
          <Main />
        </UserChoiceContextProvider>
      </ScoreContextProvider>
    </PhaseContextProvider>
  )
}

export default App;

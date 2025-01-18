import { useReducer } from "react";
import NavBar from "./Components/NavBar";
import { GlobalContext } from "./Context/GlobalContext";
import { reducer } from "./Context/Reducer";


const initialState = {
  'tasksPending': [],
  'tasksCompleted': [],
  'theme': 'dark'
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={{
      state, 
      dispatch
    }}>
      <NavBar/>
    </GlobalContext.Provider>
  );
}

export default App;

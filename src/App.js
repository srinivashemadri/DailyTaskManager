import { useEffect, useReducer } from "react";
import NavBar from "./Components/NavBar";
import { GlobalContext } from "./Context/GlobalContext";
import { reducer } from "./Context/Reducer";


const initialState = {
  'tasksPending': [],
  'tasksCompleted': [],
  'theme': 'dark'
}


function App() {

  useEffect(()=>{
      const pendingTasks = JSON.parse(localStorage.getItem('pendingTasks'));
      const completedTasks = JSON.parse(localStorage.getItem('completedTasks'));

      if(pendingTasks){
          dispatch({
            'type':'setPendingTasks',
            'payLoad': pendingTasks
          })
      }

      if(completedTasks){
          dispatch({
            'type': 'setCompletedTasks',
            'payLoad': completedTasks
          })
      }

  },[])

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

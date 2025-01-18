import { useReducer } from "react";
import NavBar from "./Components/NavBar";
import { GlobalContext } from "./Context/GlobalContext";


const initialState = {
  'tasksPending': [],
  'tasksCompleted': [],
  'theme': 'dark'
}


const reducer = (state, action) => {
  switch(action.type){
    case 'createTaskItem': {
        let updatedTasks = [...state.tasksPending]
        updatedTasks.push(action.payLoad);
        return {
          ...state,
          'tasksPending': updatedTasks
        }
    }
    case 'updateTaskItem': {
      let updatedTasks = [...state.tasksPending]

      updatedTasks = updatedTasks.filter((task) => task.taskId !== action.id);

      updatedTasks.push(action.payLoad);
      return {
        ...state,
        'tasksPending': updatedTasks
      }
    }

    case 'deletePendingTaskItem': {
      let updatedTasks = [...state.tasksPending]

      updatedTasks = updatedTasks.filter((task) => task.taskId !== action.id);
      return {
        ...state,
        'tasksPending': updatedTasks
      }
    }

    case 'deleteCompletedTaskItem': {
      let updatedTasks = [...state.tasksCompleted]

      updatedTasks = updatedTasks.filter((task) => task.taskId !== action.id);
      return {
        ...state,
        'tasksCompleted': updatedTasks
      }
    }

    case 'markTaskAsDone': {
      let pendingTasks = [...state.tasksPending]
      let completedTasks = [...state.tasksCompleted]

      let updatedPendingTasks = pendingTasks.filter((task)=> task.taskId !== action.taskId)
      let taskNeedToBeMarkedAsDone = pendingTasks.filter((task) => task.taskId === action.taskId)

      if(taskNeedToBeMarkedAsDone.length !== 0){
        completedTasks.push(taskNeedToBeMarkedAsDone[0]);
      }

      return{
        ...state,
        'tasksPending': updatedPendingTasks,
        'tasksCompleted': completedTasks
      }

    }

    case 'markTaskAsPending': {
      let pendingTasks = [...state.tasksPending]
      let completedTasks = [...state.tasksCompleted]

      let updatedCompletedTasks = completedTasks.filter((task)=> task.taskId !== action.taskId)
      let taskNeedToBeMarkedAsPending = completedTasks.filter((task) => task.taskId === action.taskId)


      if(taskNeedToBeMarkedAsPending.length !== 0){
        pendingTasks.push(taskNeedToBeMarkedAsPending[0]);
      }

      return{
        ...state,
        'tasksPending': pendingTasks,
        'tasksCompleted': updatedCompletedTasks
      }

    }

    default: {
      return state
    }
  }
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

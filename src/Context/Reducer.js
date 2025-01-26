export const reducer = (state, action) => {
    switch(action.type){

        case 'setPendingTasks':{
            return{
                ...state,
                'tasksPending': action.payLoad
            }
        }

        case 'setCompletedTasks': {
            return {
                ...state,
                'tasksCompleted': action.payLoad
            }
        }

        case 'createTaskItem': {
            let updatedTasks = [...state.tasksPending]
            updatedTasks.push(action.payLoad);
            
            updateAndSetItemToLocalStorage('pendingTasks', updatedTasks);
            return {
                ...state,
                'tasksPending': updatedTasks
            }
        }

        case 'updateTaskItem': {
            let updatedTasks = [...state.tasksPending]
    
            updatedTasks = updatedTasks.filter((task) => task.taskId !== action.id);
    
            updatedTasks.push(action.payLoad);

            updateAndSetItemToLocalStorage('pendingTasks', updatedTasks);
            return {
                ...state,
                'tasksPending': updatedTasks
            }
        }
    
        case 'deletePendingTaskItem': {
            let updatedTasks = [...state.tasksPending]
    
            updatedTasks = updatedTasks.filter((task) => task.taskId !== action.id);

            updateAndSetItemToLocalStorage('pendingTasks', updatedTasks);

            return {
                ...state,
                'tasksPending': updatedTasks
            }
        }
    
        case 'deleteCompletedTaskItem': {
            let updatedTasks = [...state.tasksCompleted]
    
            updatedTasks = updatedTasks.filter((task) => task.taskId !== action.id);

            updateAndSetItemToLocalStorage('completedTasks', updatedTasks);

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

            updateAndSetItemToLocalStorage('pendingTasks', updatedPendingTasks);

            updateAndSetItemToLocalStorage('completedTasks', completedTasks);

    
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

            updateAndSetItemToLocalStorage('pendingTasks', pendingTasks);

            updateAndSetItemToLocalStorage('completedTasks', updatedCompletedTasks);
    
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

const updateAndSetItemToLocalStorage = (key, payLoad) => {
    if(key !== null){
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(payLoad));
    }
}
  
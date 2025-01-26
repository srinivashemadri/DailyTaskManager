import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { useNavigate } from 'react-router-dom';
import CompletedTaskList from './CompletedTaskList';
import PendingTaskList from './PendingTaskList';

function TaskList() {

    const globalContext = useContext(GlobalContext);
    const navigate = useNavigate();

    const [tasksPending, setTasksPending] = useState([]);
    const [tasksCompleted, setTasksCompleted] = useState([]);

    useEffect(()=>{
        if(globalContext.state.tasksPending && globalContext.state.tasksPending.length > 0){
            setTasksPending(globalContext.state.tasksPending);
        }
        else{
            setTasksPending([])
        }

        if(globalContext.state.tasksCompleted && globalContext.state.tasksCompleted.length > 0){
            setTasksCompleted(globalContext.state.tasksCompleted);
        }
        else{
            setTasksCompleted([])
        }

    }, [globalContext.state.tasksPending, globalContext.state.tasksCompleted])

    const handleDeleteItem = (taskId, isPending) => {
        if(isPending){
            globalContext.dispatch({
                'id': taskId,
                'type': 'deletePendingTaskItem'
            })
        }
        else{
            globalContext.dispatch({
                'id': taskId,
                'type': 'deleteCompletedTaskItem'
            })
        }
    }

    const handleUpdateTaskItem = (formData) =>{
        navigate('/updateTask', {state: formData})
    }

    const handleMarkAsDone = (taskId) =>{
        globalContext.dispatch({
            'taskId': taskId, 
            'type': 'markTaskAsDone'
        })
    }

    const handleMarkAsPending = (taskId) =>{
        globalContext.dispatch({
            'taskId': taskId, 
            'type': 'markTaskAsPending'
        })
    }

    return (
        <div className='container'>
                 
            <PendingTaskList 
                tasksPending={tasksPending} 
                handleDeleteItem={handleDeleteItem }
                handleMarkAsDone={handleMarkAsDone}
                handleUpdateTaskItem={handleUpdateTaskItem}
            />

            <hr/>

            <CompletedTaskList 
                tasksCompleted={tasksCompleted} 
                handleDeleteItem={handleDeleteItem} 
                handleMarkAsPending={handleMarkAsPending}
            />
                    
        </div>
    )
}

export default TaskList

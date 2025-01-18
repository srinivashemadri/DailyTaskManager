import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import TaskItem from './TaskItem';
import { useNavigate } from 'react-router-dom';

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
            {
                tasksPending.length === 0 && tasksCompleted.length === 0 ? (
                    <div className="card ms-3 me-3 mt-5">
                        <div className='card-header text-center'>
                            <h4>There are no tasks to display</h4>
                        </div>
                        <div className="card-body text-center">
                            <button 
                                className='btn btn-lg btn-info text-light' 
                                onClick={()=>{
                                    navigate('/createTask')
                                }}
                            >
                                <i className="bi bi-plus-square me-2" style={{fontSize: '1em'}}></i>
                                Create your first task
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {
                            tasksPending.length === 0 ? (
                                <h2 className='ms-2 mt-4'>No pending tasks</h2>
                            ): (
                                <>
                                    <h3 className='ms-2 mt-4'>Pending Tasks</h3>
                                    {
                                        tasksPending.map((task, index) => {
                                            return(
                                                <div key = {index}>
                                                    <TaskItem 
                                                        taskHeader={task.taskHeader}
                                                        taskDescription={task.taskDescription}
                                                        taskDueDate={task.taskDueDate}
                                                        taskPriority={task.taskPriority}
                                                        taskId = {task.taskId}
                                                        id={index}
                                                        deleteTaskAction={handleDeleteItem}
                                                        updateTaskAction={handleUpdateTaskItem}
                                                        markTaskAsDoneAction={handleMarkAsDone}
                                                        isPending={true}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        }
        
                        {
                            tasksCompleted.length === 0 ? (
                                <h3 className='ms-2 mt-4'>No Completed Tasks</h3>
                            ) : (
                                <>
                                    <h3 className='ms-2 mt-4'>Completed Tasks</h3>
                                    {
                                        tasksCompleted.map((task, index) => {
                                            return(
                                                <div key = {index}>
                                                    <TaskItem 
                                                        taskHeader={task.taskHeader}
                                                        taskDescription={task.taskDescription}
                                                        taskDueDate={task.taskDueDate}
                                                        taskPriority={task.taskPriority}
                                                        taskId = {task.taskId}
                                                        id={index}
                                                        deleteTaskAction={handleDeleteItem}
                                                        updateTaskAction={handleUpdateTaskItem}
                                                        markTaskAsPendingAction={handleMarkAsPending}
                                                        isPending={false}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </div>

        
        
    )
}

export default TaskList

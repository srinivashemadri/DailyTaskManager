import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { sortTasksByDate } from '../Common/Utils';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';

function PendingTaskList({tasksPending, handleDeleteItem, handleMarkAsDone, handleUpdateTaskItem}) {

    const [tasks, setTasks] = useState([]);
    const initFilter = {
        'sortBy': 'date-low-high',
        'priority': 'All'
    }
    const [filter, setFilter] = useState(initFilter);
    const navigate = useNavigate();

    
    useEffect(()=>{
        setTasks(tasksPending || []);
        setFilter({
            'sortBy': 'date-low-high',
            'priority': 'All'
        });

    }, [tasksPending])

    const handleReset = () => {
        setFilter(initFilter);
        setTasks(tasksPending);
    }

    const handleSortBy = (data, tasks) => {
        let updatedTasks = [...tasks];
        updatedTasks = sortTasksByDate(updatedTasks, data === 'date-low-high');
        setTasks(updatedTasks);
    }

    const handlePriorityFilter = (priority) => {
        let updatedTasks = [...tasksPending];
        switch(priority){
            case 'All':
                setTasks(tasksPending);
                break;

            case 'High':
                updatedTasks = updatedTasks.filter((task)=> task.taskPriority === 'high')
                setTasks(updatedTasks);
                break;

            case 'Medium':
                updatedTasks = updatedTasks.filter((task)=> task.taskPriority === 'medium')
                setTasks(updatedTasks);
                break;

            case 'Low':
                updatedTasks = updatedTasks.filter((task)=> task.taskPriority === 'low')
                setTasks(updatedTasks);
                break;

            default:
                priority = 'All'
        }

        let updatedFilter = {
            ...filter,
            priority: priority
        }

        setFilter(updatedFilter);
        handleSortBy(updatedFilter.sortBy, updatedTasks);
    }

    const handleCreateTask = () => {
        navigate('/createTask')
    }


    return (
            tasksPending.length === 0 ? (
                <div className='ms-2 mt-5 d-flex align-items-center'>
                    <h3>No Pending Tasks</h3>
                    <button className='btn btn-info btn-sm text-white ms-auto' onClick={handleCreateTask}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
            ) : (
                <>
                    <Filter 
                        handlePriorityFilter={handlePriorityFilter}
                        filter={filter}
                        setFilter={setFilter}
                        handleReset={handleReset}
                        handleSortBy={handleSortBy}
                        tasks={tasks}
                        headerText={'Pending Tasks'}
                        handleCreateTask={handleCreateTask}
                        createEnabled={true}
                    />
                    {
                        tasks.length === 0 ? (
                            <h3 className='ms-2 mt-5 text-center'>No Tasks</h3>
                        ) 
                        
                        : 
                        
                        tasks.map((task, index) => {
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
                                        markTaskAsDoneAction={handleMarkAsDone}
                                        updateTaskAction={handleUpdateTaskItem}
                                        isPending={true}
                                    />
                                </div>
                            )
                        })
                        
                    
                    }
                </>
            )
        )
}

export default PendingTaskList

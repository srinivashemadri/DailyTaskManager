import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { sortTasksByDate } from '../Common/Utils';

function PendingTaskList({tasksPending, handleDeleteItem, handleMarkAsDone, handleUpdateTaskItem}) {

    const [tasks, setTasks] = useState([]);
    const initFilter = {
        'sortBy': 'date-low-high',
        'priority': 'All'
    }
    const [filter, setFilter] = useState(initFilter);

    
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


    return (
            tasksPending.length === 0 ? (
                <h3 className='ms-2 mt-5'>No Pending Tasks</h3>
            ) : (
                <>
                    <div className='ms-2 mt-4'>
                        <h3>Pending Tasks</h3>

                        <div className='row mt-3'>
                            <div className='col-3'>
                                <select 
                                    className="form-select" 
                                    aria-label="Default select example"
                                    value={filter.sortBy}
                                    onChange={(e)=>{
                                        setFilter({
                                            ...filter,
                                            'sortBy': e.target.value
                                        })
                                        handleSortBy(e.target.value, [...tasks]);
                                    }}
                                >
                                    <option value="sort-by" disabled>Sort By</option>
                                    <option value="date-low-high">Date Ascending</option>
                                    <option value="date-high-low">Date Descending</option>
                                </select>
                            </div>
                            <div className='col-9 '>
                                <button onClick={()=>{
                                    handlePriorityFilter('All');
                                }} className={ (filter.priority === 'All' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>All</button>

                                <button onClick={()=>{
                                    handlePriorityFilter('High');
                                }} className={ (filter.priority === 'High' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>
                                    <i className="bi bi-flag-fill ms-2 me-2 text-danger"></i>
                                    High
                                </button>

                                <button onClick={()=>{
                                    handlePriorityFilter('Medium');
                                }} className={ (filter.priority === 'Medium' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>
                                    <i className="bi bi-flag-fill ms-2 me-2 text-warning"></i>
                                    Medium
                                </button>

                                <button onClick={()=>{
                                    handlePriorityFilter('Low');
                                }} className={ (filter.priority === 'Low' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>
                                    <i className="bi bi-flag-fill ms-2 me-2 text-dark"></i>
                                    Low
                                </button>

                                <button
                                    className='btn btn-light ms-1'
                                    onClick={handleReset}
                                >
                                    <i className="bi bi-arrow-counterclockwise ms-2 me-2"></i>
                                    Reset
                                </button>
                                
                            </div>
                        </div>

                    </div>
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

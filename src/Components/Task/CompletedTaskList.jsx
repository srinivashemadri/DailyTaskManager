import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { sortTasksByDate } from '../Common/Utils';
import Filter from './Filter';

function CompletedTaskList({tasksCompleted, handleDeleteItem, handleMarkAsPending}) {

    const [tasks, setTasks] = useState([]);
    const initFilter = {
        'sortBy': 'date-low-high',
        'priority': 'All'
    }
    const [filter, setFilter] = useState(initFilter);

    
    useEffect(()=>{
        setTasks(tasksCompleted || []);
        setFilter({
            'sortBy': 'date-low-high',
            'priority': 'All'
        });

    }, [tasksCompleted])

    const handleReset = () => {
        setFilter(initFilter);
        setTasks(tasksCompleted);
    }

    const handleSortBy = (data, tasks) => {
        let updatedTasks = [...tasks];
        updatedTasks = sortTasksByDate(updatedTasks, data === 'date-low-high');
        setTasks(updatedTasks);
    }

    const handlePriorityFilter = (priority) => {
        let updatedTasks = [...tasksCompleted];
        switch(priority){
            case 'All':
                setTasks(tasksCompleted);
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
            tasksCompleted.length === 0 ? (
                <h3 className='ms-2 mt-4'>No Completed Tasks</h3>
            ) : (
                <>
                    <Filter 
                        handlePriorityFilter={handlePriorityFilter}
                        filter={filter}
                        setFilter={setFilter}
                        handleReset={handleReset}
                        handleSortBy={handleSortBy}
                        tasks={tasks}
                        headerText={'Completed Tasks'}
                        createEnabled={false}
                    />
                    {
                        tasks.length === 0 ? (
                            <h3 className='ms-2 mt-4 text-center'>No Tasks</h3>
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
                                        markTaskAsPendingAction={handleMarkAsPending}
                                        isPending={false}
                                    />
                                </div>
                            )
                        })
                        
                    
                    }
                </>
            )
        )
}

export default CompletedTaskList

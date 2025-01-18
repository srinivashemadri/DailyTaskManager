import React from 'react'
import TaskItem from './TaskItem'

function CompletedTaskList({tasksCompleted, handleDeleteItem, handleMarkAsPending}) {
  return (
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

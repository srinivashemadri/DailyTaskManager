import React from 'react'
import TaskItem from './TaskItem'

function PendingTaskList({tasksPending,handleDeleteItem, handleUpdateTaskItem, handleMarkAsDone }) {
  return (
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
    )
}

export default PendingTaskList

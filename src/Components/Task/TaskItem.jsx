import React, { memo } from 'react'
import { formatDate } from '../Common/Utils';

function TaskItem({
        taskHeader, taskDescription, taskDueDate, 
        taskPriority, taskId, id, 
        deleteTaskAction, updateTaskAction, markTaskAsDoneAction, 
        markTaskAsPendingAction, isPending
    }) {

    const handleUpdateTaskAction = () => {
        const formData = {
            taskHeader, taskDescription, taskDueDate, taskPriority, taskId
        };

        updateTaskAction(formData);
    }

    const handleDeleteTaskAction = () => {
        deleteTaskAction(taskId, isPending);
    }

    const handleTaskDoneAction = () => {
        markTaskAsDoneAction(taskId);
    }

    const handleTaskPendingAction = () => {
        markTaskAsPendingAction(taskId);
    }

    return (
        <div className='card mt-3 ms-2'>
            <div className='card-header bg-info text-light'>
                <h4 id={'taskHeader-'+id}>{taskHeader}</h4>
            </div>

            <div className='card-body'>
                <div className='row'>
                    <div className='col-xs-12 col-md-8'>
                        <p id={'taskDescription-'+id} >
                        <strong>    
                            <i className="bi bi-pass ms-2 me-2"></i>
                            
                        </strong>: {taskDescription}
                        </p>
                        <p id={'taskDescription-'+id}>
                            <strong>
                                <i className="bi bi-calendar-event ms-2 me-2"></i>
                            </strong>:  { formatDate(taskDueDate)}
                        </p>

                        <p id={'taskPriority-'+id}>
                            
                            <i className="bi bi-flag ms-2 me-2"></i>
                            : {taskPriority}
                        </p>
                    </div>
                    <div className='col-xs-12 col-md-4 d-flex justify-content-center align-items-center'>
                        {
                            isPending? (
                                <>
                                    <button 
                                        className='btn text-success mb-3 ms-1 me-1'
                                        onClick={handleTaskDoneAction}
                                        style={{fontSize: '1.5em'}}
                                    >
                                        <i className="bi bi-check2-square"></i>
                                    </button>

                                    <button 
                                        className='btn text-info mb-3 ms-1 me-1'
                                        onClick={handleUpdateTaskAction}
                                        style={{fontSize: '1.25em'}}
                                    >
                                        <i className="bi bi-pencil"></i>
                                    </button>

                                    <button 
                                        className='btn btn-round text-danger mb-3 ms-1 me-1'
                                        onClick={handleDeleteTaskAction}
                                        style={{fontSize: '1.25em'}}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </>
                            ): (
                                <>
                                    <button 
                                        className='btn text-dark mb-3 ms-1 me-1'
                                        onClick={handleTaskPendingAction}
                                        style={{fontSize: '1.5em'}}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </button>

                                    <button 
                                        className='btn btn-round text-danger mb-3 ms-1 me-1'
                                        onClick={handleDeleteTaskAction}
                                        style={{fontSize: '1.25em'}}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </>

                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default memo(TaskItem);

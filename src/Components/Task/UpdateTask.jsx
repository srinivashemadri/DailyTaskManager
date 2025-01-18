import React, { useContext } from 'react'
import TaskForm from './TaskForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

function UpdateTask() {

    const location = useLocation();
    const globalContext = useContext(GlobalContext);
    const navigate = useNavigate();

    const { state } = location;
    const {taskDescription, taskHeader, taskDueDate, taskPriority, taskId} = state;

    const handleUpdateTask = (formData) => {
        globalContext.dispatch({
            'type': 'updateTaskItem',
            'payLoad': formData,
            'id': taskId
        });

        navigate('/tasks');
    }
  return (
    <div className='card ms-5 me-5 mt-5'>
        <div className='card-header bg-info text-light'>
            <h5>Update a task</h5>
        </div>
        <div className='card-body'>
            <TaskForm 
                action={handleUpdateTask} 
                actionItemText={'Update'}
                taskDescription={taskDescription}
                taskHeader={taskHeader}
                taskDueDate={taskDueDate}
                taskPriority={taskPriority}
            />
        </div>
    </div>
  )
}

export default UpdateTask

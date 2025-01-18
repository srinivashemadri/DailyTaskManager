import React, { useContext } from 'react'

import { GlobalContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import TaskForm from './TaskForm';
import {v4 as uuidv4} from 'uuid';

function CreateTask() {

    const globalContext = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleCreateTask = (formData) => {
        globalContext.dispatch({
            'type': 'createTaskItem',
            'payLoad': {
                ...formData,
                'taskId': uuidv4()
            }
        });

        navigate('/tasks');
    }

    return (
        <div className='card ms-5 me-5 mt-5 '>
            <div className='card-header bg-info text-light'>
                <h5>Create a task</h5>
            </div>
            <div className='card-body'>
                <TaskForm action={handleCreateTask} actionItemText={'Create'}/>
            </div>
        </div>
    )
}

export default CreateTask

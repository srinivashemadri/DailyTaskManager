import React from 'react'
import {useForm} from 'react-hook-form'
import ErrorDisplay from '../Common/ErrorDisplay';

function CreateTask() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    let date = new Date();
    const todayDate = date.toISOString().split('T')[0];

    return (
        <div className='card ms-5 me-5 mt-5'>
            <div className='card-header'>
                <h5>Create a task</h5>
            </div>
            <div className='card-body'>
                    <form onSubmit={handleSubmit((data)=>{
                        console.log(data);
                    })}>

                        <div className="mt-3">
                            <label htmlFor="taskHeader" className="form-label">Task Header</label>
                            <input 
                                type="text"
                                className="form-control" 
                                id="taskHeader" 
                                placeholder="Input your task header"
                                {
                                    ...register('taskHeader', {
                                        required: {
                                            value: true,
                                            message: 'Task Header is required'
                                        }, 
                                        minLength: {
                                            value: 3,
                                            message: 'Header of length 3 is required'
                                        }, 
                                        maxLength: {
                                            value: 50,
                                            message: 'Header should contain max length of 50'
                                        } 
                                    })
                                }
                            />
                        </div>

                        {
                            errors.taskHeader && <ErrorDisplay message={errors.taskHeader.message}/>
                        }

                        <div className="mt-3">
                            <label htmlFor="taskDescription" className="form-label">Task Description</label>
                            <input 
                                type="text"
                                className="form-control" 
                                id="taskDescription" 
                                placeholder="Input your task description"
                                {
                                    ...register('taskDescription', {
                                        required: {
                                            value: true,
                                            message: 'Task Description is required'
                                        }, 
                                        minLength: {
                                            value: 3,
                                            message: 'Description of length 3 is required'
                                        }, 
                                        maxLength: {
                                            value: 150,
                                            message: 'Description should contain max length of 150'
                                        } 
                                    })
                                }
                            />
                        </div>

                        {
                            errors.taskDescription && <ErrorDisplay message={errors.taskDescription.message}/>
                        }

                        <div className="mt-3">
                            <label htmlFor="taskDueDate" className="form-label">Due Date</label>
                            <input 
                                type="date"
                                className="form-control" 
                                id="taskDueDate" 
                                placeholder="By when are you targetting this to complete"
                                min={todayDate}
                                {
                                    ...register('taskDueDate', {
                                        required: {
                                            value: true,
                                            message: 'Task Due Date is required'
                                        }, 
                                        validate: (value) => {
                                            const today = new Date().toISOString().split('T')[0];
                                            return value >= today || 'Task Due Date must be today or later';
                                        }
                                         
                                    })
                                }
                            />
                        </div>

                        {
                            errors.taskDueDate && <ErrorDisplay message={errors.taskDueDate.message}/>
                        }

                    
                        <div className="mt-3">
                            <label htmlFor="taskPriority" className="form-label">Select priority</label>
                            
                            <select  
                                className="form-select" 
                                id="taskPriority"
                                {
                                    ...register('taskPriority', {
                                        required: {
                                            value: true,
                                            message: 'Task Header is required'
                                        }, 
                                        validate: (value)=>{
                                            return value !== 'Choose priority' || 'Chose valid option'
                                        }
                                    })
                                }
                                
                            >
                                <option disabled selected value="Choose priority">Choose Priority</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        {
                            errors.taskPriority && <ErrorDisplay message={errors.taskPriority.message}/>
                        }

                        <div className='mt-3 text-center'>
                            <button 
                                className='btn btn-info text-light' 
                                type="submit"
                            >
                                Create
                            </button>
                        </div>

                </form>

            </div>
        </div>
    )
}

export default CreateTask

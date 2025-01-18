import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  const handleCreateTask = () => {
    navigate('/createTask')
  }

  const handleDisplayAllTasks = () => {
    navigate('/tasks');
  }



  return (
    
    <div className='container'>
      <div className='card mt-5'>
        <div className='card-header text-center bg-info text-white'>
          <h4>Welcome to Task Manager</h4>
        </div>
        <div className='card-body text-center d-grid gap-2 '>
          <button 
            className='btn btn-lg btn-light text-dark'
            onClick={handleCreateTask}
          >
            <i className="bi bi-plus-square me-3"></i>
            Create a task quickly
          </button>

          <button 
            className='btn btn-lg btn-light text-dark'
            onClick={handleDisplayAllTasks}
          >
            <i className="bi bi-eye me-3"></i>
              See all my tasks
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default Home

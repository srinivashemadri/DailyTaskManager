import React from 'react'
import Card from '../Common/Card'
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
    <div>
        <Card title={'Create Task'} message={'Add a task to your task list'} action={handleCreateTask}/>
        <Card title={'Display Tasks'} message={'Display all your tasks'} action={handleDisplayAllTasks}/>
    </div>
    
  )
}

export default Home

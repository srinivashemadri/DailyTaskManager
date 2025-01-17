import React from 'react'
import Card from '../Common/Card'
import CreateTask from '../Task/CreateTask'

function Home() {
  return (
    <div>
        <Card title={'Create Task'} message={'Add a task to your task list'}/>
        <Card title={'Display Tasks'} message={'Display all your tasks'}/>
        <CreateTask/>
    </div>
    
  )
}

export default Home

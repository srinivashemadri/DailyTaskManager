import React from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from '../Components/Home/Home';
import CreateTask from '../Components/Task/CreateTask';
import TaskList from '../Components/Task/TaskList';
import UpdateTask from './Task/UpdateTask';

function NavBar() {
  return (
    
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-info">
          <div className="container-fluid">
              <Link to={{
                pathname: '/home'
              }
              } className="navbar-brand mb-0 h1">Task Manager</Link>
          </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/createTask" element={<CreateTask/>}/>
        <Route path='/updateTask' element={<UpdateTask/>}/>
        <Route path='/tasks' element={<TaskList/>}/>
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default NavBar

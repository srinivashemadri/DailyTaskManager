import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Components/Home/Home';
import CreateTask from '../Components/Task/CreateTask';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/createTask" element={<CreateTask/>}/>
          
        </Routes>
      </BrowserRouter>
  )
}

export default Router

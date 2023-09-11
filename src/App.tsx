import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Employee } from './components/employee/Employee';
import { Navbar } from './components/navbar/Navbar';


function App() {

  // const router = createBrowserRouter(
  //   [{
  //     path:'/',element:<Home/>
  //   }, 
  //   {
  //     path:'/employee',element:<Employee/>
  //   }]
    
    
  // )

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="employee" element={<Employee />} />
        </Route>
      </Routes>
      <Navbar></Navbar>
    
    </>
  );
}

export default App;

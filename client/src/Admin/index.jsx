import React from 'react'
import SideBAr from './Components/SideBAr'
import HomePage from './pages/HomePAge'
import Category from './pages/Category'
import Orders from './pages/Orders'
import { Route, Routes } from "react-router-dom";



export default function Admin() {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-md-3 bg-dark" style={{ height: '100vh' }}><SideBAr /></div>
        <div className="col-md-9">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/get-all-orders' element={<Orders/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

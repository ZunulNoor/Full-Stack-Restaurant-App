import React from 'react'
import UserNav from './Components/UserNav'
import Category from './Pages/Category'
import Home from './Pages/Home'
import Products from './Pages/Products'
// import CustomCart from './Pages/CustomCart'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import ProductPage from './Pages/ProductPage'
import { Navigate, Route, Routes } from "react-router-dom";


export default function User() {

  return (

    <>
      <UserNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu/:_id" element={<ProductPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<Navigate to='/' replace={true} />} />
      </Routes>

    </>
  )
}
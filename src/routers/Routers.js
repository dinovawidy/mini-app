import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Tentang from '../pages/Tentang'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='tentang' element={<Tentang/>} />
        <Route path='produk' element={<Tentang/>} />
        <Route path='faq' element={<Tentang/>} />
        <Route path='events' element={<Tentang/>} />
        <Route path='partnership' element={<Tentang/>} />

    </Routes>
  )
}

export default Routers
import s from './UseJsonFetch.module.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const UseJsonFetch = () => {

  return (
    <Routes>
      <Route path='/useJsonFetch' element={
        <div className='mainContainer'>
          useJsonFetch
        </div>
      } />
    </Routes>
  )
}

export default UseJsonFetch 
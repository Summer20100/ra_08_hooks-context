import { Route, Routes } from 'react-router-dom'
import s from './Authentication.module.css'


const Authentication = () => {
  return (
    <Routes>
      <Route path='/authentication' element={
        <div className="mainContainer">
          Authentication
        </div>
      } />
    </Routes>
  )
}

export default Authentication
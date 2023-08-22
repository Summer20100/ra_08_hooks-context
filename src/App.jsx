import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import UseEffect from './components/UseEffect/UseEffect'
import UseJsonFetch from './components/UseJsonFetch/UseJsonFetch'
import Authentication from './components/Authentication/Authentication'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <UseEffect />
            <UseJsonFetch />
            <Authentication />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Start from './components/Start/Start'
import NotFound from './components/NotFound/NotFound'
import UseEffect from './components/UseEffect/UseEffect'
import JsonFetch from './components/UseJsonFetch/JsonFetch'
import Authentication from './components/Authentication/Authentication'



function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='*' element={
    //       <div className="App">
    //         <Navbar />
    //         <UseEffect />
    //         <JsonFetch />
    //         <Authentication />
    //       </div>
    //     } />
    //   </Routes>
    // </BrowserRouter>
      
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/useEffect' element={ <UseEffect /> } />
            <Route path='/useJsonFetch' element={ <JsonFetch /> } />
            <Route path='/authentication' element={ <Authentication /> } />
            <Route path='/' element={ <Start text='Hooks & Context API' unit='8' /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </div>


      // <Routes>
      //   <Route path='*' element={
      //     <div className="App">
      //       <Navbar />
      //       <UseEffect />
      //       <JsonFetch />
      //       <Authentication />
      //     </div>
      //   } />
      // </Routes>

  );
}

export default App;

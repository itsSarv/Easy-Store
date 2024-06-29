import React from 'react'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Admin from './components/Admin'
import Notfound from './components/Notfound';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
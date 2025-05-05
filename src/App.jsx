import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './templates/Home'
import Contact from './templates/Contact'
import About from './templates/About'
import Login from './templates/Login'
import Header from './templates/Header'
import DashBoard from './dashboard/DashBoard'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/dashboard/*' element={<DashBoard></DashBoard>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

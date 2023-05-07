import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Reservations from './components/Reservations/Reservations'
import Home from './Home/Home'
import Menu from './components/Menu/Menu'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/reservations" element={<Reservations/>}/>
    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App

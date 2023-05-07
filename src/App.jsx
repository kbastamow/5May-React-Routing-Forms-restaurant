import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Reservations from './components/Reservations/Reservations'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/"></Route>
      <Route path="/reservas" element={<Reservations/>}/>
    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App

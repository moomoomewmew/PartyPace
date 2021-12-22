import React, {useState} from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import EditPage from './components/EditPage'
import Login from './login'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Dashboard from './dashboard'
import CreateAccount from './components/CreateAccount'

function App() {

  const [isLoggedIn, toggleLogin] = useState(false)
  const [ride, setRide] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        <h1>PartyPace</h1>
        <Navbar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}/>

      </header>
      <Routes>
        <Route path='/' element={<LandingPage setRide={setRide} />} />
        <Route path='/dashboard' element={<Dashboard setRide={setRide} />} />
        <Route path='/newaccount' element={<CreateAccount isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />} />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}/>} />
        <Route path='/edit' element={<EditPage ride={ride}/>} />
      </Routes>
    </div>
  )
}

export default App

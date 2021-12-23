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

  const [user, setUser] = useState(null)
  const [isLoggedIn, toggleLogin] = useState(false)
  const [ride, setRide] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        <h1>PartyPace</h1>
        <div className="info"><h3>Find group rides in your city!</h3></div>
        <Navbar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} />

      </header>
      <Routes>
        <Route path='/' element={<LandingPage setRide={setRide} user={user}/>} />
        <Route path='/dashboard' element={<Dashboard setRide={setRide} user={user} />} />
        <Route path='/newaccount' element={<CreateAccount isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} user={user} />} />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} />} />
        <Route path='/edit' element={<EditPage ride={ride}/>} />
      </Routes>
    </div>
  )
}

export default App

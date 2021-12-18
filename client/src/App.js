import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Dashboard from './dashboard'
import CreateAccount from './components/CreateAccount'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the project</h1>
        <Navbar />


      </header>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/newaccount' element={<CreateAccount />} />
      </Routes>
    </div>
  )
}

export default App

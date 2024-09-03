import './App.css'
import Landing from './Components/Landing Page/Landing.jsx'
import Login from './Components/Login/Login.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Landing/>} />
    </Routes>
  </Router>
  )
}

export default App

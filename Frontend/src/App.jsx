import './App.css'
import Landing from './Components/Landing Page/Landing.jsx'
import Login from './Components/Login/Login.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

import AddTask from './Components/Add Task/AddTask.jsx'
import AllTasks from './Components/All Tasks/AllTasks.jsx'

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Landing/>} />
      <Route path='/addtask' element={<AddTask/>}/>
      <Route path='/allTasks' element={<AllTasks/>}/>
    </Routes>
  </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './styles/pages.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import OrderMenu from './pages/OrderMenu'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<OrderMenu />} />
      </Routes>
    </Router>
  )
}

export default App

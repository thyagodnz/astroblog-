import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login/login'
import NewAccount from './pages/CreateAccount/newAccount'
import ForgotPassword from './pages/ForgotPassword/forgotPassword'
import AstroBlog from './pages/AstroBlog/AstroBlog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-account" element={<NewAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/astroblog" element={<AstroBlog />} /> 
      </Routes>
    </Router>
  )
}

export default App
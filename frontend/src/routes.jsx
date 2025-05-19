import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import NewAccount from './pages/NewAccount/NewAccount.jsx'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx'
import MyProfile from './pages/MyProfile/MyProfile.jsx'
import News from './pages/News/News.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-account" element={<NewAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/news/:id" element={<News />} />
      </Routes>
    </Router>
  )
}

export default App

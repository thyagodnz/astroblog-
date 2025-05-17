import './profile.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import { useAuth } from '../../contexts/AuthProvider.jsx'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <>
            <Header />
            <div className='profile-container'>
                <h2>Bem-vindo, {user?.name || 'Usuário'}!</h2>
                <button onClick={handleLogout} className='logout-button'>
                    Sair
                </button>
            </div>
            <Footer />
        </>
    )
}

export default Profile

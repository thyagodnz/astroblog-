import './header.css'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <header className='header'>
            <h1 onClick={() => navigate('/')}>ASTROBLOG</h1>

            {location.pathname === '/' && (
                <button className='login-button' onClick={() => navigate('/login')}>
                    Entrar
                </button>
            )}
        </header>
    )
}

export default Header

import './header.css'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    return (
        <header className='header'>
            <h1 onClick={() => navigate('/')}>ASTROBLOG</h1>
        </header>
    )
}

export default Header

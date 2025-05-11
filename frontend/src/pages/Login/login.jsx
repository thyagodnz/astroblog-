import './login.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className='container'>
                <form className='login'>
                    <h1>Fazer login</h1>
                    <input placeholder='E-mail' name='email' type='email' />
                    <input placeholder='Senha' name='senha' type='password' />
                    <button type='button'>Login</button>
                    <h2 onClick={() => navigate('/forgot-password')}>
                        Esqueceu a senha?
                    </h2>
                    <h2 onClick={() => navigate('/new-account')}>
                        Criar conta
                    </h2>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login

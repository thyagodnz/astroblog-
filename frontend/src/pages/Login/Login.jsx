import './login.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import api from '../../services/api.js'
import { useAuth } from '../../contexts/AuthContext.jsx'

function Login() {
    const navigate = useNavigate()

    const inputEmail = useRef()
    const inputPassword = useRef()
    const { login } = useAuth()

    async function handleLogin() {
        try {
            const response = await api.post('/login', {
                email: inputEmail.current.value,
                password: inputPassword.current.value
            })

            if (response.status === 200 && response.data) {
                alert('Login realizado com sucesso!')

                const userData = response.data
                localStorage.setItem('user', JSON.stringify(userData))
                login(userData)
                navigate('/')
            }
        } catch (error) {
            alert('Erro ao tentar fazer login')
            console.error(error)
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <form className='login'>
                    <h1>Fazer login</h1>
                    <input placeholder='E-mail' name='email' type='email' ref={inputEmail} />
                    <input placeholder='Senha' name='senha' type='password' ref={inputPassword} />
                    <button type='button' onClick={handleLogin}>Login</button>
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

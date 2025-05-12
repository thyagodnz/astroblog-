import './login.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import api from '../../services/api'

function Login() {
    const navigate = useNavigate()

    const inputEmail = useRef()
    const inputPassword = useRef()

    async function handleLogin() {
        try {
            const response = await api.post('/login', {
                email: inputEmail.current.value,
                password: inputPassword.current.value
            })

            if (response.status === 200) {
                alert('Login realizado com sucesso!')

                localStorage.setItem('user', JSON.stringify(response.data))
                navigate('/')
            }
        } catch (error) {
            alert('E-mail ou senha inválidos')
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

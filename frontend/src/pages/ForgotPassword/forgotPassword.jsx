import './forgotPassword.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className='container'>
                <form className='forgot-password'>
                    <h1>Esqueci minha senha</h1>
                    <h2 className='instructions'>Insira seu e-mail para receber as instruções e redefinir sua senha</h2>
                    <input placeholder='E-mail' name='email' type='email' />
                    <button type='button'>Enviar</button>
                    <h2 onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                        Voltar para tela de Login
                    </h2>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default ForgotPassword

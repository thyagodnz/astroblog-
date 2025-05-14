import './newAccount.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import api from '../../services/api.js'

function NewAccount() {

    const navigate = useNavigate()

    const inputName = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()

    async function creatUser() {
        await api.post('/users', {
            name: inputName.current.value,
            email: inputEmail.current.value,
            password: inputPassword.current.value
        })
        alert('Conta criada com sucesso!')
        navigate('/')
    }

    return (
        <>
            <Header />
            <div className='container'>
                <form className='new-account'>
                    <h1>Criar nova conta</h1>
                    <input placeholder='Nome' name='nome' type='name' ref={inputName} />
                    <input placeholder='E-mail' name='email' type='email' ref={inputEmail} />
                    <input placeholder='Senha' name='senha' type='password' ref={inputPassword} />
                    <button type='button' onClick={creatUser}>Criar</button>
                    <h2 onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                        Voltar para tela de Login
                    </h2>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default NewAccount

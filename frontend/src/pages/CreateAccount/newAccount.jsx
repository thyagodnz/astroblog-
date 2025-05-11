import './newAccount.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import { useNavigate } from 'react-router-dom'

function NewAccount() {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className='container'>
                <form className='new-account'>
                    <h1>Criar nova conta</h1>
                    <input placeholder='Nome' name='nome' type="name" />
                    <input placeholder='E-mail' name='email' type='email' />
                    <input placeholder='Senha' name='senha' type='password' />
                    <button type='button'>Criar</button>
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

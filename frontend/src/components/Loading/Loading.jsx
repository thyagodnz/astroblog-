import './loading.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Loading() {

    return (
        <>
            <Header />
            <div className="page loading">
                <p>Carregando...</p>
            </div>
            <Footer />
        </>
    )
}

export default Loading

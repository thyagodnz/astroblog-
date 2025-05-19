import './loading.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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

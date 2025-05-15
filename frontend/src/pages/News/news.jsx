import './news.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import api from '../../services/api'
import { useEffect, useState } from 'react'

function News() {
    const [news, setNews] = useState(null)

   useEffect(() => {
    api.get('/news/1')
        .then(response => setNews(response.data))
        .catch(error => {
            console.error('Erro ao carregar notícia:', error)
            setNews({
                title: 'Erro ao carregar notícia',
                content: 'Não foi possível carregar os dados da notícia.',
            })
        })
}, [])

    if (!news) return <p>Carregando...</p>

    return (
        <>
            <Header />
            <div className='container'>
                <section className='news'>
                    <h1>{news.title}</h1>
                    <p>{news.content}</p>
                </section>
            </div>
            <Footer />
        </>
    )
}


export default News




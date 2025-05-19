import './news.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Loading from '../../components/Loading/Loading.jsx'

function News() {

    const { id } = useParams()
    const [news, setNews] = useState(null)

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get(`http://localhost:3000/news/${id}`)
                setNews(response.data)
            } catch (error) {
                console.error('Erro ao carregar notícia:', error)
            }
        }

        fetchNews()
    }, [id])

    if (!news) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (
        <>
            <Header />
            <div className='page'>
                <h1>{news.title}</h1>
                <p className='author'>Por <strong>{news.author}</strong></p>
                {news.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <img src={news.image} alt={news.title} />
            </div>
            <Footer />
        </>
    )
}

export default News

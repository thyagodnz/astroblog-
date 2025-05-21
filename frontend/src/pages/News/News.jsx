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
        return <Loading />
    }

    const data = new Date(news.createdAt)
    const formattedDate = data.toLocaleDateString('pt-BR')
    const formattedTime = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

    return (
        <>
            <Header />
            <div className='page'>
                <h1 className='news-title'>{news.title}</h1>
                <p className='info'>
                    Por <strong className='author'>{news.author}</strong> em {formattedDate} às {formattedTime}
                </p>

                {news.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

                <img
                    src={news.image}
                    alt={news.imageDescription || news.title}
                    className="news-image"
                />

                {news.imageDescription && (
                    <p className="news-image-description">{news.imageDescription}</p>
                )}
            </div>
            <Footer />
        </>
    )
}

export default News

import './news.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading/Loading.jsx'
import { format, parseISO } from 'date-fns'

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

    const date = parseISO(news.createdAt)
    const formattedDate = format(date, 'dd/MM/yyyy')
    const formattedTime = format(date, 'HH:mm')

    return (
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
    )
}

export default News

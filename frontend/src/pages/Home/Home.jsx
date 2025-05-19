import './home.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const navigate = useNavigate()
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get('http://localhost:3000/news')
        setNewsList(response.data)
      } catch (error) {
        console.error('Erro ao buscar notícias:', error)
      }
    }

    fetchNews()
  }, [])

  const goToNews = (id) => {
    navigate(`/news/${id}`)
  }

  return (
    <>
      <Header />
      <div className='page'>
        {newsList.map((news) => (
          <div
            key={news._id}
            className="news-preview"
            onClick={() => goToNews(news._id)}
          >
            <h2>{news.title}</h2>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Home

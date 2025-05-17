import News from '../../models/News.js'

async function getNews(req, res) {
    try {
        const allNews = await News.find()
        return res.status(200).json(allNews)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao buscar notícias', error: error.message })
    }
}

export default getNews

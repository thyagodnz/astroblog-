import News from '../../models/News.js'

async function createNews(req, res) {
    try {
        const data = req.body
        const newNews = await News.create(data)
        return res.status(201).json(newNews)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao criar notícia', error: error.message })
    }
}

export default createNews

import News from '../models/News.js'

async function getNews(req, res) {
    try {
        const allNews = await News.find().sort({ createdAt: -1 })
        return res.status(200).json(allNews)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao buscar notícias', error: error.message })
    }
}

async function createNews(req, res) {
    try {
        const { title, content, author, image, imageDescription } = req.body

        const contentArray = content
            .split(/\n\s*\n/)
            .map(p => p.trim())
            .filter(p => p.length > 0)

        const newNews = await News.create({
            title,
            content: contentArray,
            author,
            image,
            imageDescription
        })

        return res.status(201).json(newNews)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao criar notícia', error: error.message })
    }
}

async function deleteNews(req, res) {
    const id = req.params.id

    try {
        const deletedNews = await News.findByIdAndDelete(id)

        if (!deletedNews) {
            return res.status(404).json({ res: 'Notícia não encontrada' })
        }

        return res.status(200).json({ res: 'Notícia deletada com sucesso' })
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao deletar notícia', error: error.message })
    }
}

async function updatedNews(req, res) {
    const id = req.params.id
    const updatedData = req.body

    try {
        const updatedNews = await News.findByIdAndUpdate(id, updatedData, { new: true })

        if (!updatedNews) {
            return res.status(404).json({ res: 'Notícia não encontrada' })
        }

        return res.status(200).json(updatedNews)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao atualizar notícia', error: error.message })
    }
}

async function getNewsById(req, res) {
    const id = req.params.id
    try {
        const news = await News.findById(id)
        if (!news) {
            return res.status(404).json({ res: 'Notícia não encontrada' })
        }
        return res.status(200).json(news)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao buscar notícia', error: error.message })
    }
}

export { getNews, createNews, deleteNews, updatedNews, getNewsById }

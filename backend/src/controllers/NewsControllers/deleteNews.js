import News from '../../models/News.js'

async function deleteNews(req, res) {
    const id = req.params.id

    try {
        const deletedNews = await News.findByIdAndDelete(id)

        if (!deletedNews) {
            return res.status(404).json({ res: 'Notícia não encontrada' })
        }

        return res.status(200).json({ res: 'Deletado com sucesso' })
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao deletar', error: error.message })
    }
}

export default deleteNews

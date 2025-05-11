import News from '../models/news.js';

async function getNews(req, res) {
    try {
        const allNews = await News.find();
        return res.status(200).json(allNews);
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao buscar notícias', error: error.message });
    }
}

async function createNews(req, res) {
    try {
        const data = req.body;
        const newNews = await News.create(data);
        return res.status(201).json(newNews);
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao criar notícia', error: error.message });
    }
}

async function deleteNews(req, res) {
    const id = req.params.id;

    try {
        const deletedNews = await News.findByIdAndDelete(id);

        if (!deletedNews) {
            return res.status(404).json({ res: 'Notícia não encontrada' });
        }

        return res.status(200).json({ res: 'Deletado com sucesso' });
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao deletar', error: error.message });
    }
}

async function updatedNews(req, res) {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const updatedNews = await News.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedNews) {
            return res.status(404).json({ res: 'Notícia não encontrada' });
        }

        return res.status(200).json(updatedNews);
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao atualizar', error: error.message });
    }
}

export { getNews, createNews, deleteNews, updatedNews };

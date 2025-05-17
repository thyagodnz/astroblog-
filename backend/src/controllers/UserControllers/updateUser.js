import User from '../../models/User.js'

async function updateUser(req, res) {
    const id = req.params.id
    const newUser = req.body

    try {
        const updatedUser = await User.findByIdAndUpdate(id, newUser, {
            new: true
        })

        if (!updatedUser) {
            return res.status(404).json({ res: 'Usuário não encontrado' })
        }

        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao atualizar usuário', error: error.message })
    }

}

export default updateUser

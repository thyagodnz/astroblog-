import User from '../../models/User.js'

async function createUser(req, res) {
    try {
        const user = req.body
        const newUser = await User.create(user)
        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao criar usuário', error: error.message })
    }
}

export default createUser

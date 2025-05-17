import User from '../../models/User.js'

async function loginUser(req, res) {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email, password })

        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas' })
        }

        return res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
}

export default loginUser

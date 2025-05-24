import { Router } from 'express'
import { getUsers, createUser, deleteUser, updateUser, loginUser } from './controllers/UserController.js'
import { getNews, createNews, deleteNews, updatedNews, getNewsById, addComment } from './controllers/NewsController.js'

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)
routes.put('/users/:id', updateUser)
routes.post('/login', loginUser)

routes.get('/news', getNews)
routes.post('/news', createNews)
routes.delete('/news/:id', deleteNews)
routes.put('/news/:id', updatedNews)
routes.get('/news/:id', getNewsById)
routes.post('/news/:id/comments', addComment)

export default routes

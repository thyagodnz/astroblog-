import { Router } from 'express'
import { getUsers, createUser, deleteUser, updateUser, loginUser } from './controllers/UserController.js'
import { getNews, createNews, deleteNews, updateNews, getNewsById, addComment, deleteComment } from './controllers/NewsController.js'

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)
routes.put('/users/:id', updateUser)
routes.post('/login', loginUser)

routes.get('/news', getNews)
routes.post('/news', createNews)
routes.delete('/news/:id', deleteNews)
routes.put('/news/:id', updateNews)
routes.get('/news/:id', getNewsById)
routes.post('/news/:id/comments', addComment)
routes.delete('/news/:newsId/comments/:commentId', deleteComment)

export default routes

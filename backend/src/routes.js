import { Router } from 'express'

import getUsers from './controllers/UserControllers/getUsers.js'
import createUser from './controllers/UserControllers/createUser.js'
import deleteUser from './controllers/UserControllers/deleteUser.js'
import updateUser from './controllers/UserControllers/updateUser.js'
import loginUser from './controllers/UserControllers/loginUser.js'

import getNews from './controllers/NewsControllers/getNews.js'
import createNews from './controllers/NewsControllers/createNews.js'
import deleteNews from './controllers/NewsControllers/deleteNews.js'
import updatedNews from './controllers/NewsControllers/updateNews.js'

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

export default routes

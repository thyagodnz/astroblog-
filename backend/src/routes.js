import { Router } from 'express';
import { getUsers, createUser, deleteUser, updateUser } from './controllers/UserController.js';
import { getNews, createNews, deleteNews, updatedNews } from '../controllers/NewsController.js';
const routes = Router();

routes.get('/users', getUsers);
routes.post('/users', createUser);
routes.delete('/users/:id', deleteUser);
routes.put('/users/:id', updateUser);

routes.get('/news', getNews);
routes.post('/news', createNews);
routes.delete('/news/:id', deleteNews);
routes.put('/news/:id', updatedNews);


export default routes;

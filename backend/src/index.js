import express from 'express';
import routes from './routes.js';
import connectDataBase from './database/db.js';


const app = express();

app.use(express.json());


app.use(routes);


connectDataBase()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor e banco de dados conectados');
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error.message);
        process.exit(1); // Encerra o processo se a conexão falhar
    });

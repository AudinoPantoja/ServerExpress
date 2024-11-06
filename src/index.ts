import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Otra ruta de ejemplo sin parámetros
app.get('/', (_req: Request, res: Response) => {
    res.send('¡Hola, Bienvenido al Mundo de express!');
});

// Define una ruta con un parámetro en la URL y consulta opcional
app.get('/parameter/:name', (req: Request, res: Response) => {
    const { name } = req.params; // Obtiene el parámetro de la URL
    const lastname = req.query.lastname || 'Apellido no especificado'; // Obtiene el parámetro de consulta "lastname"
    const ubication = req.query.ubication || 'Ubicación no especificada'; // Obtiene el parámetro de consulta "ubication"

    res.send(`Hola, ${name}! ${lastname ? `Eres de apellido: ${lastname},` : ''} ${ubication ? `y vives en: ${ubication}.` : ''}`);
});


// Ruta que maneja parámetros de consulta (query) solamente
app.get('/info', (req: Request, res: Response) => {
    const name = req.query.name ? req.query.name : 'Desconocido';
    const age = req.query.age ? req.query.age : 'Edad no especificada';

    res.send(`Hola ${name}, tienes ${age} años`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    // colocar http://localhost:3000/parameter/Audino?lastname=Pantoja&ubication=Mocoa
    // http://localhost:3000/info?name=Audino&age=34
});

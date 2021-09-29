import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import characters from './controllers/characters.js';
// import controller2 from './controllers/thing2.js';
// import controller3 from './controllers/thing3.js';
// import controller4 from './controllers/thing4.js';
// import controller5 from './controllers/thing5.js';

const app = express();

app.use(express.json());

app.use('/api/character', characters);
//app.use('api/route2', controller2);
//app.use('api/route3', controller3);
//app.use('api/route4', controller4);
//app.use('api/route5', controller5);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

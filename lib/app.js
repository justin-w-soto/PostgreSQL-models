const express = require('express');
const notFoundMiddleware = require ('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error.js');

const app = express();

app.use(express.json());

app.use('/api/v1/character', require('./controllers/characterController'));
// app.use('/api/v1/location', require('./controllers/locationController'));
// app.use('/api/v1/episode', require('./controllers/episodeController'));
// app.use('/api/v1/airdate', require('./controllers/airDateController'));
// app.use('/api/v1/image', require('./controllers/imageController'));



app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
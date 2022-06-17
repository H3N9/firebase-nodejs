const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const postRotes = require('./routes/post-route');
const userRoute = require('./routes/user-route');
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', postRotes.routers);
app.use('/api', userRoute.routers);

app.listen(config.port, () => console.log(`http://localhost:${config.port}/`));

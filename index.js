const express = require('express');
const app = express();
const routerApi = require('./network/routerApi');
const path = require('path');
require('./config_env.js');

app.use(express.json());

routerApi(app);

console.log(process.env.DATA)

//Not Found error
app.use((req, res) => res.status(404).sendFile(path.join( __dirname, './public/404.html')));

const port = process.env.PORT || 4000;

app.listen( port, () => console.log(`App listening on port, ${port}`));
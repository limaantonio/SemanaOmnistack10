const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const {setupwebsocket} = require('./webSocket');


const app = express();
const server = http.Server(app);


setupwebsocket(server);

mongoose.connect('mongodb+srv://carlos:54411red@cluster0-7t1fg.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


//Metodods HTTP, GET, POST, PUT, DELETE

//Tipos de parametros 
//Query Params req.query (filtros, paginacao, ordenação ...)
//Route Params
//Body

app.get('/users', (request, response) => {
   console.log(request.query);
    return response.json({message : 'Hello World'});
});

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);


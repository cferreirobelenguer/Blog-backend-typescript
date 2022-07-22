
//ESModules
import express from 'express'
import bodyParser from 'body-parser'
import * as dotenv from "dotenv";

const app= express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//config dotenv
dotenv.config();

const port:any=6300;

//config cors
app.use((_req, res, next) => {
    
    //Configuramos el control de acceso para que cualquier cliente pueda hacer peticiones ajax
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    //permitimos métodos http 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//aply the routes
import controllerRouter from './controller/controller'

app.use(controllerRouter);

//server listens with the local port 6300 and the localhost
app.listen(port || process.env.PORT,'0.0.0.0',()=>{
    console.log("nodejs server is running on "+port);
});

module.exports=app;
import express from "express";
import db from "./config/database.js";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

// Convertir body a objeto js
app.use(express.json()); // recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})); // decodificar datos que llegan en form-urlencoded 

//Configurar cors 
app.use(cors());


try {
    await db.authenticate();
    console.log('La conexión se ha establecido correctamente!');
} catch (err) {
    console.error('No se puede establecer conexión con la DB:');
}

app.use(router);

export default app;
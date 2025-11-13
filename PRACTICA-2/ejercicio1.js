import express from 'express';  
import { check, validationResult } from 'express-validator';
import mysql from 'mysql2';
const app = express()  
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bd_practica2'
    }
)

app.post('/categoria/nuevo',(req, res) => {
    const q = "INSERT INTO categorias (nombre, descripcion) VALUES (?)";
    const valores = [req.body.nombre, req.body.descripcion];
    db.query(q,[valores],(err,datos) => {
            return res.json(datos);
        }
    )
})

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});

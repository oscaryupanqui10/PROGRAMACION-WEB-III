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

app.post("/producto", (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body;
  const sql = "INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)";
  db.query(sql, [nombre, precio, stock, categoria_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Producto registrado correctamente", id: result.insertId });
  });
});

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});

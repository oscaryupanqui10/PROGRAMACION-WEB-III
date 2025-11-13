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

app.get("/producto/:id", (req, res) => {
  const id = req.params.id;
  const sql = `
    SELECT p.*, c.nombre AS categoria 
    FROM productos p
    JOIN categorias c ON p.categoria_id = c.id
    WHERE p.id = ?;
  `;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});

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

app.patch("/productos/:id/stock", (req, res) => {
  const id = req.params.id;
  const { cantidad } = req.body;
  const sql = "UPDATE productos SET stock = stock + ? WHERE id = ?";
  db.query(sql, [cantidad, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Stock modificado correctamente" });
  });
});

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});
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

app.delete("/categorias/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM categorias WHERE id=?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Categoría y productos eliminados correctamente" });
  });
});

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});

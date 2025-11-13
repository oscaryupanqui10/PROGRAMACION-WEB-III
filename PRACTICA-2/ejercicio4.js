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

app.put("/categorias/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion } = req.body;
  const sql = "UPDATE categorias SET nombre=?, descripcion=?, fecha_act=NOW() WHERE id=?";
  db.query(sql, [nombre, descripcion, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Categoría actualizada correctamente" });
  });
});

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});

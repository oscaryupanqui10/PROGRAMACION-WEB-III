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

app.put("/producto/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, precio, stock, categoria_id } = req.body;
  const sql = `
    UPDATE productos 
    SET nombre=?, precio=?, stock=?, categoria_id=?, fecha_act=NOW() 
    WHERE id=?;
  `;
  db.query(sql, [nombre, precio, stock, categoria_id, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Producto actualizado correctamente" });
  });
});

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});

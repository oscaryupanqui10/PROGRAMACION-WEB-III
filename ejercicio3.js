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

app.get('/categorias/:id', (req, res) => {
    const id = req.params.id;
    const qCategoria = "SELECT * FROM categorias WHERE id = ?";
    db.query(qCategoria, [id], (err, categoriaResult) => {
        if (err) return res.status(500).json({ error: 'Error al obtener la categoría' });
        if (categoriaResult.length === 0)
            return res.status(404).json({ message: 'Categoría no encontrada' });
        
        const qProductos = "SELECT * FROM productos WHERE categoria_id = ?";
        db.query(qProductos, [id], (err, productosResult) => {
            if (err) return res.status(500).json({ error: 'Error al obtener los productos' });

            res.json({
                categoria: categoriaResult[0],
                productos: productosResult
            });
        });
    });
});

const puerto = 3001;
app.listen(puerto, 
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});
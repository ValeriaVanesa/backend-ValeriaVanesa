

// Ruta de productos

const express =require("express");
const router= express.Router();

router.get('/', (req,res)=>{
    res.send('<h1 style="color:violet">Listamos todos los productos</h1>');
});

router.put( '/:id',(req,res)=>{
    let productos = req.params.id;

    res.send(`<h1 style="color:skyblue">Producto ${productos} actualizado </h1>`);
});

router.delete('/:id',(req,res)=>{
    let productos = req.params.id;
    res.send(`<h1 style="color: red"> Producto ${productos} eliminado </h1>`);
});




















module.exports =router;
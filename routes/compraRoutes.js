
//RUTA NEWSLETTER

const express =require("express");
const router= express.Router();

const { nuevaCompra,
        actualizarCompra,
        eliminarCompra
} = require("../controllers/compraControllers");

router.post('/',nuevaCompra);
router.put( '/:id', actualizarCompra);
router.delete( '/:id', eliminarCompra);

module.exports =router;
 
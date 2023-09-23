
//RUTA NEWSLETTER

const express =require("express");
const router= express.Router();

const { nuevaCompra
} = require("../controllers/compraControllers");

router.post('/',nuevaCompra);

module.exports =router;
 
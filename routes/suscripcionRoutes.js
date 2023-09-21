
//RUTA NEWSLETTER

const express =require("express");
const router= express.Router();

const { Suscripciones,
        nuevoUsuario
} = require("../controllers/suscripcionControllers");



router.get('/',Suscripciones);
router.post('/',nuevoUsuario);

module.exports =router;
 
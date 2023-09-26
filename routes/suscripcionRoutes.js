
//RUTA NEWSLETTER

const express =require("express");
const router= express.Router();

const { Suscripciones,
        nuevoUsuario,
       actualizarUsuario,
       eliminarUsuario
     
        
       
} = require("../controllers/suscripcionControllers");



router.get('/',Suscripciones);
router.post('/',nuevoUsuario);
router.put( '/:id', actualizarUsuario);
router.delete( '/:id', eliminarUsuario);

    


module.exports =router;
 
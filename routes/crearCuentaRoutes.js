
const express =require("express");
const router= express.Router();

const { cuentaUsuario,
        nuevaCuenta,
        actualizarCuenta,
        eliminarCuenta
     
         
} = require("../controllers/crearCuentaControllers");



router.get('/',cuentaUsuario);
router.post('/',nuevaCuenta);
router.put( '/:id', actualizarCuenta);
router.delete( '/:id', eliminarCuenta);


    

module.exports =router;
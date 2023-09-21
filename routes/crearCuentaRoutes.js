
const express =require("express");
const router= express.Router();

const { cuentaUsuario,
        nuevaCuenta,
         eliminarCuenta
} = require("../controllers/crearCuentaControllers");



router.get('/',cuentaUsuario);
router.post('/',nuevaCuenta);

router.delete('/',eliminarCuenta)

module.exports =router;
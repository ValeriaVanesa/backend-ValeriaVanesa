const express =require("express");
const router= express.Router();


const{
    contacto,
    nuevoContacto,
    actualizarContacto,
    eliminarContacto
    

}= require('../controllers/contactoControllers');

router.get('/',contacto);
router.post('/',nuevoContacto);
router.put( '/:id', actualizarContacto);
router.delete( '/:id', eliminarContacto);
module.exports= router;
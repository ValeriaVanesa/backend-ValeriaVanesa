const express =require("express");
const router= express.Router();


const{
    contacto,
    nuevoContacto
}= require('../controllers/contactoControllers');

router.get('/',contacto);
router.post('/',nuevoContacto);

module.exports= router;
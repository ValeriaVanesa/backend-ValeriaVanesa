
// Ruta de users

const express =require("express");
const router= express.Router();
const{
   usuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}= require('../controllers/usersControlers')

router.get('/', usuarios);

router.post('/', crearUsuario);

router.put( '/:id', actualizarUsuario);
    
router.delete('/:id',eliminarUsuario);
 

module.exports =router;
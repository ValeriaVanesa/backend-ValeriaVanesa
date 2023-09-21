// Formulario de contacto

function contacto (req,res){
    res.send ('<h1> Comentarios de los usuarios');
}

const nuevoContacto = (req,res)=>{
    const { email, nombre, telefono, comentario  }  = req.body;
    console.log(`los datos recibidos son : email: ${email} , nombre: ${nombre}, telefono: ${telefono} y comentario: ${comentario}`);
   
   if(email == ''|| nombre == '' || telefono == '' || comentario == ''){
       res.redirect ('error.html');
   }else {
       res.redirect ('ok.html');
   }
   
}

module.exports={
    contacto,
    nuevoContacto
}
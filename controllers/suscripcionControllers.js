
//NEWSLETTER , suscripcion a noticias

function Suscripciones (req,res){
res.send( '<h1> Usuarios suscritos</h1');
}

const nuevoUsuario =(req,res)=>{
    const { email } =req.body;
    console.log(`El email recibido es ${email}`);
    

    if( email !='' ){
      res.redirect('ok.html');
       
 }else{ 
        
       res.redirect('error.html');
    }

    
    }





module.exports= {
    Suscripciones,
    nuevoUsuario
}

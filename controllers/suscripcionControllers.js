const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;

//NEWSLETTER , suscripcion a noticias

function Suscripciones (req,res){
res.send( '<h1> Usuarios suscritos</h1');
}

//crear suscripcion

const nuevoUsuario =(req,res)=>{
    const { email } =req.body;
    console.log(`El email recibido es ${email}`);
    

    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
     
        let dbo= db.db('TiendaOnline');
    

        let emailUsuario = {
            email:email
           
       };
        
         await dbo.collection('clientes' ).insertOne(emailUsuario,(err,res)=>{
            if (err) throw err,
        console.log(`email insertado en la coleccion clientes:${res}`);
        db.close();
         });
        });


    if( email !='' ){
      res.redirect('ok.html');
       
 }else{ 
        
       res.redirect('error.html');
    }

    
    }

//actualizar

const actualizarUsuario =(req,res)=>{
    let user= req.params.id;
    res.send(`<h1 style="color:green">Usuario ${user} actualizado </h1>`);
 

MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
        email: 'valetheangel95@gmail.com'
        
    }
    
    let datoActualizado= {
        $set:{
            email:'nombre_apellido@gmail.com'
            
    
        }
    };
    
    
    
     await dbo.collection('clientes').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });


}


//eliminar


const eliminarUsuario = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Usuario eliminado ${user}</h1>`);


    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            email: 'valetheangel95@gmail.com',
          
        }
        
         await dbo.collection('clientes').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });



    }

module.exports= {
    Suscripciones,
    nuevoUsuario,
   actualizarUsuario,
   eliminarUsuario

   
}

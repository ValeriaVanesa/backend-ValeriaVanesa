// Formulario de contacto
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;



function contacto (req,res){
    res.send ('<h1> Comentarios de los usuarios');
}


//crear contacto


const nuevoContacto = (req,res)=>{
    const { email, nombre, telefono, comentario  }  = req.body;
    console.log(`los datos recibidos son : email: ${email} , nombre: ${nombre}, telefono: ${telefono} y comentario: ${comentario}`);

    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
       
        let dbo= db.db('TiendaOnline');
       
    
        let infoUsuario = {
            nombre: nombre,
            email:email,
            telefono:telefono,
            comentario: comentario
    
       };
        
         await dbo.collection('clientes' ).insertOne(infoUsuario,(err,res)=>{
            if (err) throw err,
        console.log(`Informacion insertada en la coleccion clientes:${res}`);
        db.close();
         });
        });

   
   if(email == ''|| nombre == '' || telefono == '' || comentario == ''){
       res.redirect ('error.html');
   }else {
       res.redirect ('ok.html');
   }
   
}



//actualizar--------------------------------------------------------------------------

const actualizarContacto =(req,res)=>{
    let user= req.params.id;
    res.send(`<h1 style="color:green">Contacto ${user} actualizado </h1>`);
 

MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
        nombre: 'Valeria',
        email:'valetheangel95@gmail.com',
        telefono:'01130683167',
        comentario: 'hola'
    }
    
    let datoActualizado= {
        $set:{
            nombre: 'Maria',
            email:'maria55@gmail.com',
            telefono:'1193876454',
            comentario: 'hola'
            
    
        }
    };
    
    
    
     await dbo.collection('clientes').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });


}


//eliminar----------------------------------------------------------------------------



const eliminarContacto = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Contacto eliminado ${user}</h1>`);


    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            nombre: 'Valeria',
            email:'valetheangel95@gmail.com',
            telefono:'1130683167',
            comentario: 'hola'
          
        }
        
         await dbo.collection('clientes').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });



    }



module.exports={
    contacto,
    nuevoContacto,
    actualizarContacto,
    eliminarContacto
   
   
}
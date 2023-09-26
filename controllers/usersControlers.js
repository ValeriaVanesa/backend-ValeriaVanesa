const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;






function usuarios(req,res){

    const{ email, password } = req.body;
    res.send('<h1>Lista de todos los usuarios</h1>');


    
}


//crear usuario


const crearUsuario=(req,res)=>{
    const{ email, password } = req.body;

    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
      
        let dbo= db.db('TiendaOnline');
     
        let datosCliente = {
            email:email,
            password:password
       };
        
         await dbo.collection('clientes').insertOne(datosCliente,(err,res)=>{
            if (err) throw err,
        console.log(`documento insertado en la coleccion clientes:${res}`);
        db.close();
         });
        });


    let mail= "valetheangel95@gmail.com";
    let contraseña= "1228";
   console.log(`los datos recibidos son: ${email} y ${password}`);
   
   
   
   if(email ==''|| password ==''){
       res.redirect('error.html')
   }else if(email == mail && password == contraseña){
       res.redirect('ok.html');
   }else if(email != mail && password != contraseña){
       res.redirect('error.html');
   
   }else if(email != mail ||  password != contraseña){
       res.redirect('error.html');
   }
   }


//------------------------------------------------------------------------------------------------------------------------------------------




 
//actualizar usuario

 
  const actualizarUsuario =(req,res)=>{
    let user= req.params.id;
    res.send('<h1 style="color:red">Usuario ${user} actualizado </h1>');
 

MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
        email: 'valetheangel95@gmail.com',
        password:'1228'
    }
    
    let datoActualizado= {
        $set:{
            email:'nombre_apellido@gmail.com',
            password:'1653'
    
        }
    };
    
    
    
     await dbo.collection('clientes').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });


}
//--------------------------------------------------------------------------------------------------------------------------------------------

//eliminar usuario




const eliminarUsuario = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Usuario eliminado ${user}</h1>`);


    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            email: 'valetheangel95@gmail.com',
            password:'1228'
        }
        
         await dbo.collection('clientes').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });
    
}










module.exports= {
    usuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}
  

const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;

function cuentaUsuario(req,res){
    res.send('<h1>Nuevas cuentas de usuarios</h1>');
}


//crear cuenta---------------------------------------------------------------------------------------------------------------

const nuevaCuenta =(req,res)=>{
    const {  nombre, apellido, fechaNacimiento, dni , email, contraseña}  = req.body;
 console.log(`los datos recibidos son : nombre: ${nombre} , apellido: ${apellido}, fechaNacimiento: ${fechaNacimiento} , dni: ${dni}, email: ${email} y password: ${contraseña}` );

 MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
   
    let dbo= db.db('TiendaOnline');
   

    let infoUsuario = {
        nombre: nombre,
        apellido:apellido,
        Nacimiento:fechaNacimiento,
        dni:dni,
        email:email,
        contraseña:contraseña

   };
    
     await dbo.collection('clientes' ).insertOne(infoUsuario,(err,res)=>{
        if (err) throw err,
    console.log(`Informacion insertada en la coleccion clientes:${res}`);
    db.close();
     });
    });



if(nombre == ''|| apellido == '' || fechaNacimiento == '' || dni == '' || email == '' || contraseña == '' ){
    res.redirect ('error.html');
}else {
    res.redirect ('ok.html');
}
}

//actualizar------------------------------------------------------------------------------------

const actualizarCuenta =(req,res)=>{
    let user= req.params.id;
    res.send(`<h1 style="color:green">Usuario ${user} actualizado </h1>`);
 

MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
        nombre: 'Valeria',
        apellido:'Klos',
        Nacimiento:'2023-09-12T20:48',
        dni:'38998001',
        email:'valetheangel95@gmail.com',
        contraseña:'1228'
        
    }
    
    let datoActualizado= {
        $set:{
            nombre: 'Marcos',
            apellido:'Perez',
            Nacimiento:'2023-09-12T20:48',
            dni:'35432235',
            email:'nombre_apellido@gmail.com',
            contraseña:'1228'
            
    
        }
    };
    
    
    
     await dbo.collection('clientes').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });


}




//eliminar---------------------------------------------------------------------------------------

const eliminarCuenta = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Cuenta eliminada ${user}</h1>`);


    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            nombre: 'nombre',
            apellido:'apellido',
            Nacimiento:'fechaNacimiento',
            dni:'dni',
            email:'email',
            contraseña:'contraseña'
    
          
        }
        
         await dbo.collection('clientes').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });



    }





module.exports={
    cuentaUsuario,
    nuevaCuenta,
    actualizarCuenta,
    eliminarCuenta

  
    
    
}
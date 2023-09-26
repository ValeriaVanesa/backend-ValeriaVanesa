

const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;



//crear compra

const nuevaCompra =(req,res)=>{

    let { productos } = req.body;

    productos = JSON.parse(productos)

    let nombreProductos = ""
    let precioTotal = 0

    productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})\n`
        precioTotal = precioTotal + (product.precio * product.cantidad)
     });



    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
       
        let dbo= db.db('TiendaOnline');

    
        let infoCompra = {
          compra: nombreProductos,
           precioTotal: precioTotal

    
       };
        
         await dbo.collection('Productos' ).insertOne(infoCompra,(err,res)=>{
            if (err) throw err,
        console.log(`Informacion insertada en la coleccion clientes:${res}`);
        db.close();
         });
        });
    

    console.log(`Compra realizada... 
    ${nombreProductos}
    Precio total = $ ${precioTotal}
    `);
    
    if( productos.length > 0 ){
      res.redirect('compraRealizada.html');
    }else{ 
       res.redirect('error.html');
    }
    
}


//actualizar compra-------------------------------------------------------------------

const actualizarCompra =(req,res)=>{
    let user= req.params.id;
    res.send(`<h1 style="color:green">Compra ${user} actualizada </h1>`);

    let { productos } = req.body;

    productos = JSON.parse(productos)

    let nombreProductos = ""
    let precioTotal = 0

    productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})\n`
        precioTotal = precioTotal + (product.precio * product.cantidad)
     });


MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
            compra: "Zapatilla Vans $ 13900 (1), Bota Vans $ 14900 (1) ",
           precioTotal: '28800'
    }
    
    let datoActualizado= {
        $set:{
            compra: 'Zapatilla Vans $13900 (1)',
            precioTotal: '13900'
    
        }
    };
    
    
    
     await dbo.collection('Productos').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });




console.log(`Compra eliminada.. 
${nombreProductos}
Precio total = $ ${precioTotal}
`);

if( productos.length > 0 ){
  res.redirect('compraRealizada.html');
}else{ 
   res.redirect('error.html');
}

}


//eliminar compra-----------------------------------------------------------------------

const eliminarCompra = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Compra eliminada ${user}</h1>`);


    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            compra: "Zapatilla Vans $ 13900 (1), Bota Vans $ 14900 (1) ",
           precioTotal: "28800"
          
        }
        
         await dbo.collection('Productos').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });



    }











module.exports= {
    nuevaCompra,
    actualizarCompra,
    eliminarCompra
   
}

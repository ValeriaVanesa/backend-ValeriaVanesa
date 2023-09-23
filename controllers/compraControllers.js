
const nuevaCompra =(req,res)=>{

    let { productos } = req.body;

    productos = JSON.parse(productos)

    let nombreProductos = ""
    let precioTotal = 0

    productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})\n`
        precioTotal = precioTotal + (product.precio * product.cantidad)
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





module.exports= {
    nuevaCompra
}

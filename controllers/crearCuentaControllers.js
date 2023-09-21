function cuentaUsuario(req,res){
    res.send('<h1>Nuevas cuentas de usuarios</h1>');
}


const nuevaCuenta =(req,res)=>{
    const {  nombre, apellido, fechaNacimiento, dni , email, contraseña}  = req.body;
 console.log(`los datos recibidos son : nombre: ${nombre} , apellido: ${apellido}, fechaNacimiento: ${fechaNacimiento} , dni: ${dni}, email: ${email} y password: ${contraseña}` );
if(nombre == ''|| apellido == '' || fechaNacimiento == '' || dni == '' || email == '' || contraseña == '' ){
    res.redirect ('error.html');
}else {
    res.redirect ('ok.html');
}
}


const eliminarCuenta = (req,res)=>{
    let cuenta = req.params.id;
    res.send('<h1 style="color:red">Cuenta ${cuenta} eliminada </h1>');

}

module.exports={
    cuentaUsuario,
    nuevaCuenta,

    eliminarCuenta
}
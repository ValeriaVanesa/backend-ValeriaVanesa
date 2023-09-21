function usuarios(req,res){
    res.send('<h1>Lista de todos los usuarios</h1>');
}

const crearUsuario=(req,res)=>{
    const{ email, password } = req.body;
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
 
   const actualizarUsuario =(req,res)=>{

    let user = req.params.id;

    res.send('<h1 style="color:skyblue"> usuario  ${user} actualizado </h1>');
}


const eliminarUsuario = (req,res)=>{
    let user = req.params.id;
    res.send('<h1 style="color:red">Usuario ${user} eliminado </h1>');

}

module.exports= {
    usuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}
  
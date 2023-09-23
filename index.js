const express = require("express");
const app = express();
const dotenv= require("dotenv");
dotenv.config();
const cors = require("cors");
const usersRoutes = require('./routes/usersRoutes');

const suscripcionRoutes = require('./routes/suscripcionRoutes');
const compraRoutes = require('./routes/compraRoutes');
const contactoRoutes = require('./routes/contactoRoutes');
const crearCuentaRoutes = require('./routes/crearCuentaRoutes');
const path= require("path");

const PORT = process.env.PORT;
let corsoption ={
    "origin" :'http://localhost:5000',
    "methods": "GET,HEAD,PUT,POST,DELETE",
    
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'frontend')));
app.use(cors());

app.use('/users', usersRoutes);

app.use('/suscripcion',suscripcionRoutes);
app.use('/compra',compraRoutes);
app.use('/contacto',contactoRoutes);
app.use('/crearcuenta', crearCuentaRoutes);





app.get('/',(req,res)=>{


res.sendFile('index.html');
});



app.listen(PORT,(err)=>{
    if(err) {throw err}
    console.log(`servidor corriendo en el puerto http://localhost ${PORT}`);
});
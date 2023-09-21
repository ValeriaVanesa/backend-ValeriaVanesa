





// Carrito Compras
const shopContent =document.getElementById("shopContent");

const verCarrito=document.getElementById("verCarrito");

const modalContainer=document.getElementById("modal-container");


const productos =[
    
   {
   id: 1,
   nombre:"Zapatilla Vans",
   precio:13900,
   img: "https://i.pinimg.com/originals/92/84/91/928491a8a6f4b7a09af0f5a205ada2c4.jpg ",
   cantidad:1,
},
   {
       id: 2,
       nombre:"Bota Vans",
       precio:14900,
       img:
       "  https://i.pinimg.com/originals/2f/69/6b/2f696bd463405865abfc2313bac7afc0.jpg ",
       cantidad:1,
       
    },
    {
       id: 3,
       nombre:"Zapatilla Vans",
       precio:11900,
       img:
       "https://http2.mlstatic.com/D_Q_NP_788540-MLB27433382299_052018-Q.jpg ",
       
       cantidad:1,
    },    
    {
       id: 4,
       nombre:"Zapatilla Vans",
       precio:15000,
       img:
       
       " https://i.pinimg.com/736x/d8/6b/2d/d86b2d4773b89e6dcb7c8a4145a1962f--vans-footwear-vans-sneakers.jpg",
       cantidad:1,
       
    } ,
    {
       id: 5,
       nombre:"Zapatilla Converse",
       precio:13900,
       img:
       " https://th.bing.com/th/id/OIP.bQdo4Q1syg5cG-QwyfCUlgHaHa?pid=ImgDet&w=500&h=500&rs=1 ",
       cantidad:1,
      } ,  
    {
       id: 6,
       nombre:"Cartera White",
       precio:13900,
       img:
       "https://falabella.scene7.com/is/image/FalabellaPE/19081790_1?wid=800&hei=800&qlt=70 ",
       cantidad:1,
       
    },
    
    {
       id: 7,
       nombre:"Mochila LV",
       precio:15000,
       img: 
       " https://th.bing.com/th/id/OIP.iWKTbhZ3YO3iAg_iIZtRaAHaHa?pid=ImgDet&rs=1",
       cantidad:1,
    },   
   
    {
      id: 8,
      nombre:"Cartera Coral",
      precio:14900,
      img: 
      " https://images-na.ssl-images-amazon.com/images/I/71YthL5p64L.jpg ",
      cantidad:1,
   },   
   {
      id: 9,
      nombre:"Bandolera Brown",
      precio:11900,
      img: 
      "https://i.pinimg.com/originals/ad/c6/6f/adc66fd89cc8128f982c7254dd53d82c.png ",
      cantidad:1,
   },   
   {
      id: 10,
      nombre:"Mochila Pink",
      precio:13900,
      img: 
      " https://imgix.bustle.com/nylon/18457140/origin.jpg?w=414&h=414&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2 ",
      cantidad:1,
   },   
   {
      id: 11,
      nombre:"Mochila Black & White",
      precio:15000,
      img: 
      " https://th.bing.com/th/id/OIP.uYhNuOG7Gkdvl86t57T-uAAAAA?pid=ImgDet&w=384&h=384&rs=1 ",
      cantidad:1,
   },   

   {
      id: 12,
      nombre:"Tease Victorias Secret",
      precio:14900,
      img: 
      " https://th.bing.com/th/id/OIP.Cn7vAAGO9_m--a0JpfxCQwHaJ3?pid=ImgDet&w=760&h=1013&rs=1 ",
      cantidad:1,
   },   

   {
      id: 13,
      nombre:"La vie est belle Lancome ",
      precio:14900,
      img: 
      "https://i.pinimg.com/originals/4a/4b/f9/4a4bf9d5a1653d48d8deebae10bc7e9b.jpg ",
      cantidad:1,
   },   
   {
      id: 14,
      nombre:"Mon Paris Yves Saint Laurent ",
      precio:14900,
      img: 
      " https://th.bing.com/th/id/OIP.dsPuVmzkzudpGNVqYkkMsQHaJ4?pid=ImgDet&w=1440&h=1920&rs=1 ",
      cantidad:1,
   },   
   {
      id: 15,
      nombre:" Good Girl Blush",
      precio:15000,
      img: 
      "https://th.bing.com/th/id/OIP.ZYfKdznaWKVnlULsW2qcagHaHa?pid=ImgDet&rs=1 ",
      cantidad:1,
   },   
   {
      id: 16,
      nombre:"Bombshell Victorias Secret ",
      precio:15000,
      img: 
      " https://th.bing.com/th/id/R.58d1bdaba417057ab6fcb136f3e72013?rik=UhrZuu38WB7IaA&pid=ImgRaw&r=0 ",
      cantidad:1,
   },   
   {
      id: 17,
      nombre:" Perfect Marc Jacobs",
      precio:15000,
      img: 
      "  https://www.clara.es/medio/2020/11/27/marc-jacobs-perfect-eau-de-parfum-para-mujer_c4104fa5_500x750.jpg",
      cantidad:1,
   },   

   
   ];


let carrito=[];

productos.forEach((product)=>{
let content= document.createElement("div");
content.innerHTML= `
<img src="${product.img}">
<h3>${product.nombre}</h3>
<p class="price">$ ${product.precio} </p>

`;
shopContent.append(content);

let comprar= document.createElement("button");
comprar.innerText="comprar";
comprar.className="comprar";
content.append(comprar);

comprar.addEventListener("click",()=>{

   const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id);

if(repeat){
   carrito.map((prod)=>{
      if(prod.id === product.id){
         prod.cantidad++;
       }
        });
      }else{
         carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
         });
      }
      console.log(carrito);
   });

   
   
});




const pintarCarrito =()=>{ 
   modalContainer.innerHTML="";
   modalContainer.style.display="flex";
   const modalHeader= document.createElement("div");
   modalHeader.className="modal-header"
   modalHeader.innerHTML =`
   <h2 class="modal-header-title">Carrito</h2>

   
   `;
   modalContainer.append(modalHeader);
   const modalbutton =document.createElement("button");
   modalbutton.innerText="X";
   modalbutton.className="modal-header-button";
   modalbutton.addEventListener("click", ()=>{
      modalContainer.style.display="none";
   })

   modalHeader.append(modalbutton);

   carrito.forEach((product) =>{

      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre} </h3>
      <p class=price> $ ${product.precio} </p>
      <p>Cantidad: ${product.cantidad}</p>
      <p>Total:${product.cantidad * product.precio} </p>
  
   `;
      modalContainer.append(carritoContent);
      let eliminar = document.createElement("span");
      eliminar.innerText="❌";
      eliminar.className="delete-product";
      carritoContent.append(eliminar);
      eliminar.addEventListener("click",eliminarProducto);
   });
   
   const total= carrito.reduce((acc,el) => acc + el.precio * el.cantidad, 0);
   const totalBuying= document.createElement("div")
   totalBuying.className= "total-content"
   totalBuying.innerHTML=` total al pagar : $ ${total} `;
   modalContainer.append(totalBuying);
   
};

verCarrito.addEventListener("click", pintarCarrito);

 const eliminarProducto =() => {
   const foundId  =carrito.find((element) => element.id);

   carrito= carrito.filter((carritoId)=>{
      return carritoId !== foundId;
      });
      pintarCarrito();
 };



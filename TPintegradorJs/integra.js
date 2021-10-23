let usuarios = [];

const agregarUsuario=()=>{
    let datos = document.querySelectorAll("input"); //voy recibiendo todos los datos que se van ingresando
   let posicion="";
   let valor="";
   
   
   
    let usuario= { //todo esto es un objeto
        nombre:datos[0].value,
        apellido:datos[1].value,
        correo:datos[2].value,
        cantidad:datos[3].value,
        e:document.getElementById("valor").selectedIndex
         
              
    };

    let can=usuario.cantidad;
    let a=usuario.e;
    console.log(usuario);
    let resultado=0;
    descuento="";
    
    if(a==0){
        resultado = can * (200*.20);
        
    }else{
        if(a==1){
            resultado = can * (200*.50);
            

        }else{
            resultado = can * (200*.85);
            
        }


    }   
    console.log(resultado);

   
    
};
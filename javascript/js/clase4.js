let elemento = document.getElementById("principal");/*Capturamos el div del dom*/

/*esamos el evento load renderizamos el formulario*/
window.addEventListener('load',function(){
    elemento.innerHTML=`
    <form action="#">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="button" id="btn" class="btn btn-primary" onclick="entrar()">Entrar</button>
  </form>`;


    });
    
   /* let btn = document.getElementById("btn");capturamos el boton*/
   let usuarios=["Luis","Fede",40];
   let usuario = {
       name:"Cecilia Delfino",
       email:'delfino.cecilia@gmail.com',
       pass:'123456',
       validar:(e,p)=>{
           if(e === usuario.email && p === usuario.pass){
               return true;
           }else{
               return false;
           }
       }    
   };
   function entrar(){
       //e.preventDefault(); no se recarga la pagina
   
       let email = document.getElementById("exampleInputEmail1").value; //capturamos el email, el value capturamos es valor
       let pass = document.getElementById("exampleInputPassword1").value;//capturamos el password
   
       let entra = usuario.validar(email,pass); //guardamos la funcion en una variable

       if(entra){
           elemento.innerHTML=`
               <h1>Administración</h1>
               <p>Bienvenido ${usuario.name}</p>
           `;
       }
   
   }





let elemento = document.querySelector("#principal");

let tipoCliente=[]


const CrearFormulario=()=>{
  elemento.innerHTML=`
  <form action="#">
  <div class="row g-3">
  <div class="row justify-content-center">
  <div class="col-4">
    <input type="text" class="form-control" placeholder="Nombre" aria-label="First name">
  </div>
  <div class="col-4">
    <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name">
  </div>
  <div class=" col-8 mb-3">
    <label for="exampleFormControlTextarea1" class="form-label"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="De qué quieres hablar? " rows="3"></textarea>
    <p class="card-text"><small class="text-muted">Recuerda incluir un título para tu charla</small></p>
    <button class="w-100 btn btn-lg" type="submit" id="envio">Enviar</button>
  </div>

</div>
</div>
</form>`;


};
CrearFormulario();

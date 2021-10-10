
function CrearNavegador() {
    elemento.innerHTML = `
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          
          <a class="navbar-brand" href="#" >
            <img src="img/codoacodo.png" alt="" width="130" class="d-inline-block align-text-center">
            Conf Bs As
          </a>
          
          <!-- logo con bs as -->
        
      
                   
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav nav navbar-nav navbar-center me-auto mb-3 mb-lg-0">
             
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">La conferencia</a>
              </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Los oradores</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">El lugar y la fecha</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Conviértete en orador</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link text-success" href="#">Comprar tickets</a>
                            </li>
            </ul>
    
                         
          </div>
        
        </div>
      </nav>
    </div>`;
}
// alert("Hola mundo")/*ventana emergente*/
        console.log("Estamos en la consola")
        let nombre="Cecilia Delfino";/*variable string, ocupa el espacio solo cuando es necesario a diferencia de var*/
        var numero=10;/*variable numerica*/
        const PI=3.1416;/*tipo float*/
        let hayClases=true;/*booleanas*/
        console.log((numero+25)+' '+nombre)/*como le puse un string lo concatena*/
        console.log(hayClases)
        console.log(5>3)
        let esFeriado=true;
        /*condicionales*/
        if(8>=8){
            console.log("es correcto!")
        }else{/*si es falso*/
            console.log("no es correcto!")
        }
        console.log((5 > 3) ? "Es correcto": "No es correcto");/*esto se llama ternario*/
        
        if(hayClases==true && esFeriado !=true){/*para que sea true se tienen que dar las dos condiciones*/
            console.log("me conecto a la videollamada!")
        }else{
            console.log("no me conecto a la videollamada!")
        }
        if(25<32 || 12>20){/*se cumple una de las dos condiciones para que sea verdadero*/
            console.log('se cumplio la condicion')

        }
        let saludo="hola como estas?"
        let saludar= saludo + nombre;

        let elemento = document.getElementById('principal');
        //console.log(elemento)
        elemento.innerHTML=("<h1 class='text-center bg-info'>"+saludar+"<h1>");/*le creamos un hijo adentro de el*/
        document.write("<div class='container'><div class='row' id='principal'><h1 class='text-center bg-info'>"+ saludar + "</h1></div></div>");/*le creamos un hijo adentro de el, es otra forma de hacerlo*/
        
        document.write(`
            <div class="container"><div class="row" id="principal">
            <h1 class='text-center bg-info'> ${saludar}</h1></div></div>"
        `);
        // let mensaje = prompt("menú \n 1. Papas fritas \n 2. Milanesas con papas fritas \n 3. Milanesa napolitana");
        // console.log(mensaje)
        // if( mensaje === "1"){ 

        //     elemento.innerHTML="<p>Disfruta de tus papas</p>"
        // }else if(mensaje === "2"){
        //     elemento.innerHTML="<p>Disfruta de tu milanesa con papas fritas</p>"
        // }else if(mensaje === "3"){
        //     elemento.innerHTML="<p>Disfruta de tu milanesa a la napolitana</p>"
        // }else{
        //     elemento.innerHTML="<p>No es una opcion el valor tipeado!</p>"
        // }
        /*switch (mensaje){
            case "1":
                elemento.innerHTML="<p>Disfruta de tus papas</p>"
                break;
            case "2":
                elemento.innerHTML="<p>Disfruta de tu milanesa con papas fritas</p>"
                break;
                case "3":
                elemento.innerHTML="<p>Disfruta de tu milanesa a la napolitana</p>"
                break;
                default:
                    elemento.innerHTML="<p>No es una opcion el valor tipeado!</p>"
                    let mensaje = prompt("menú \n 1. Papas fritas \n 2. Milanesas con papas fritas \n 3. Milanesa napolitana");
        }
        let num = parseInt(prompt("Ingresa el primer número"));
        let num2 = parseInt(prompt("Ingresa el segundo número"));

        let resultado = "<p>El resultado de: " + num + " y " + num2 +" es: " + (num +num2)+ "</p>";
        elemento.innerHTML=resultado;
        elemento.innerHTML+="Hola"

*/
 
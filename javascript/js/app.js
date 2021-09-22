alert("Hola mundo")/*ventana emergente*/
        console.log("Estamos en la consola")
        let nombre="Cecilia Delfino";/*variable string, ocupa el espacio solo cuando es necesario a diferencia de var*/
        var numero=10;/*variable numerica*/
        const PI=3.1416;
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
        elemento.innerHTML=("<h1 class='text-center bg-info'>"+saludar+"<h1>");
        document.write("<h1 class='text-center bg-info'>"+saludar+"<h1>");
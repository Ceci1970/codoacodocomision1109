package clase2java;

import java.util.Scanner;

public class Clase2Java {

    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre de usuario: ");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su contraseña: ");
        String pass = entrada.nextLine();
        Ingreso ing = new Ingreso();
        ing.setUsuario(nombre);
        ing.setPass(pass);
        System.out.println(ing.Validar());
        
        /*if(!"Cecilia".equals(nombre)){
            System.out.println("El usuario es incorrecto ");
        }else{
            System.out.println("Bienvenido:  " + nombre);
        }*/
        
    }
    
}
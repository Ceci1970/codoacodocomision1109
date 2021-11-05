
package actividadjava;
import java.util.Scanner;

public class ActividadJava {

    
    public static void main(String[] args) {
       Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre: ");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su apellido: ");
        String apellido = entrada.nextLine();
        System.out.println("Ingrese su edad: ");
        String edad = entrada.nextLine();
        System.out.println("Ingrese su hobbie: ");
        String hobbie  = entrada.nextLine();
        System.out.println("Ingrese se editor de código preferido: ");
        String editor = entrada.nextLine();
        System.out.println("Ingrese el Sistema Operativo que utiliza: ");
        String sistema = entrada.nextLine();
                
        System.out.println("Nombre: "+ nombre);
        System.out.println("Apellido: "+apellido);
        System.out.println("Edad: "+edad+ " años");
        System.out.println("Hobbie: "+hobbie);
        System.out.println("Editor de código preferido: "+editor);
        System.out.println("Sistema Operativo utilizado: "+sistema);
    }
    
    
}


package clase3java;

import personal.Departamento;
import personal.Personal;


public class Clase3Java {

    
    public static void main(String[] args) {
        Personal persona = new Personal("cecilia","Delfino",51);
        
        persona.setSueldo(250000);
        Personal administrativo = new Personal("Juan","Perez",38);
        administrativo.setSueldo(80000);
        Personal mantenimiento = new Personal("Pablo","Suarez",30);
        mantenimiento.setSueldo(60000);
        System.out.println("El sueldo para el personal administrativo es: " + administrativo.getSueldo());
        System.out.println("El sueldo para el personal de mantenimiento es: " + mantenimiento.getSueldo());
        Departamento it  = new Departamento("Veronica","Furlan",32,"Desarrollo");
        it.setSueldo(500000);
        System.out.println(it.nombre+"esta ganando"+it.getSueldo());
        it.depto="Gerencia General";
        System.out.println(it.Mostrardatos());
        
    }
    
}

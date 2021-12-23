package personal; /*vamos a hacer modulos que van a estar contendidos en el paquete*/

public class Personal {/*dentro de esta clase van los atributos*/
    public String nombre, apellido, email;
    public int edad;
    private double sueldo;/*aca comenzamos con el encapsulameinto*/
    
    public double getSueldo(){/*este es el metoddo para capturar el sueldo*/
        return this.sueldo;
    }
    public void setSueldo(double nuevoSueldo){/*metodo, los dos metodos nos peermiten modificar el sueldo*/
        this.sueldo=nuevoSueldo;/*aca le asignamos al sueldo el nuevo sueldo que viene por parametros*/
    }
    public Personal (String nombre,String apellido,int edad){/*aca creamos el constructor, con alt insert hace el contructo automaticamente*/
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
}

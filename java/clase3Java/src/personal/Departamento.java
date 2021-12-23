package personal;


public class Departamento extends Personal{/*hereda los datos de personal*/
    public String depto;
    public Departamento(String nombre,String apellido,int edad,String depto){/*creo un constructor para traer los datos-heredo de personal y le agrefo depto*/
        
        super(nombre,apellido,edad); /*cunaod ponemos super nos eferimos a la lase padre que en este caso va a ser personal*/
        this.depto=depto;
    }
    public String Mostrardatos(){/*hacemos un constructor para mostrar los datos*/
        return "\n Nombre: "+ nombre + "\n Apellido: " + apellido+
                "\n Edad: " + edad+ "\n Sueldo: "+this.getSueldo()+
                "\n Pertenece al depto: "+ depto;/*aca algunos datos los heredamos de Personal*/
    } 
}

package modelo;


public class Alumnos {//decalro las variables
    private int id;
    private String nombres;
    private String apellidos;
    private String email;
    private String telefono;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    
    
    public Alumnos(int id, String nombres,String apellidos,String email, String telefono){//constructor, despues asigno los parametros que estoy recibiendo
        
      this.id=id;
      this.nombres=nombres;
      this.apellidos=apellidos;
      this.email=email;
      this.telefono=telefono;
}
}
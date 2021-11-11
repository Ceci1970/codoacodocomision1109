package config;

import java.sql.*;

public class BasedeDatos {/*para conectar la base de datos, es una a funcion*/
    public String driver = "com.mysql.jdbc.driver";
    public Connection getConection(){
        Connection conexion=null;
        try{
            conexion= DriverManager.getConnection("jdbc:mysql//localhost:3306/codoacodocomision1109");
        }catch(SQLException e){
                System.out.println(e.toString());
                }
        return conexion;
    }
    public static void main(String [] argms){
        System.out.println("hola");
        
    }
}

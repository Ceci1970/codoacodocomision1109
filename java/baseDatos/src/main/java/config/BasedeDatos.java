package config;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class BasedeDatos {/*para conectar la base de datos, es una a funcion*/
    public String driver = "com.mysql.cj.jdbc.Driver";
    public Connection getConexion()throws SQLException{
        
        Connection conexion=null;
       
        try {
                Class.forName(driver);
                conexion= DriverManager.getConnection("jdbc:mysql://localhost:3306/comision1109",
            "root", "");
         }catch(SQLException e){
            System.out.println(e.toString());
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(BasedeDatos.class.getName()).log(Level.SEVERE, null, ex);
        }
        return conexion;
    }
    public static void main(String [] argms) throws SQLException{
        
            BasedeDatos con = new BasedeDatos();
            
            Connection conexion = null;
            conexion = con.getConexion();
            
            PreparedStatement ps;
            ResultSet rs;
            
            ps = conexion.prepareStatement("SELECT * FROM participante");
            
            rs = ps.executeQuery();
            
            while(rs.next()){
                int id = rs.getInt("id");
                        String nombres = rs.getNString("nombres");
                        String apellidos = rs.getNString("apellidos");
                        String email = rs.getNString("email");
                        String telefono = rs.getNString("telefono");
                        System.out.println("\n id: "+id+ "\n Nombres: "+nombres+"\n Apellidos: "+apellidos+"\n Email"+email+"\n Telefono"+telefono);
                        
                     
            }
        
        }
        
        
        
    }


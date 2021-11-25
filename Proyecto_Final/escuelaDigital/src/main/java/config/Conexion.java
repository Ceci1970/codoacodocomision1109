package config;

import java.sql.*;


public class Conexion {
    public String driver = "com.mysql.cj.jdbc.Driver";
    public Connection getConection(){
            
    
        Connection conexion = null;
        try{
            Class.forName(driver);
            conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/comision1109",
                    "root", "");
    }catch(ClassNotFoundException | SQLException e){
            System.out.println(e.toString());
    }
        return conexion;
    }
    /*public static void main (String[] cecilia) throws SQLException{
        Connection c = null;
        Conexion con = new Conexion();
        c  = con.getConection();
        PreparedStatement ps;
        ResultSet rs;
        ps = c.prepareStatement("SELECT * FROM participante");
        rs = ps.executeQuery();
        
        while(rs.next()){
            int id =rs.getInt("id");
            String nombres = rs.getString("nombres");
            String apellidos = rs.getString("apellidos");
            String email = rs.getString("email");
            String telefono = rs.getString("telefono");
            System.out.println("Id: "+id +"\n Nombre: "+ nombres+ "\n Apellidos: "+apellidos + " \n Email: "+email+" \n Telefono:"+telefono);
            
        }
}*/
}

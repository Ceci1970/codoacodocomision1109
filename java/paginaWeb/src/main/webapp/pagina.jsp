<%-- 
    Document   : pagina
    Created on : 9 nov 2021, 11:26:35
    Author     : Win10
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            String saludo="Hola";
            String nombre="Cecilia";
        
        %>
        <h1>Mi pagina de jsp</h1>
        
        <p> <%= new java.util.Date()%>
         <p> <%=saludo+" "+nombre%>
        </p>
    </body>
</html>

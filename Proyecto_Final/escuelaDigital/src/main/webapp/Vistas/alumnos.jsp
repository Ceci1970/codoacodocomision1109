<%-- 
    Document   : alumnos
    Created on : 26 nov 2021, 11:11:10
    Author     : Win10
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Listado de Alumnos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <h1 class="text-center">Listado de Alumnos</h1>
        <div class="container">
            <div class="row">
                <a class="btn btn-primary col-md-4 m-4" href="AlumnosController?accion=nuevo">Agregar Alumno</a>
                <table class="table table-primary">
                    <thead>
                       <tr> 
                            <th>Id</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Email</th>
                            <th>Teléfonos</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>

                        </tr>
                    </thead>
                    <tbody>

                    </tbody>


                </table>
        </div>

        </div>
    </body>
</html>
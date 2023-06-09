## Administrador de Starbucks México
## Qué hace el proyecto en la parte BACK-END
<p>
Es una página web con el propósito de administrar el ingreso de nuevos empleados
<br/> 
Tiene hosting en Heroku
<br/> 
También tiene base de datos viviendo en Heroku
<br/> 
<br/> 
La base de datos relacional tiene una tabla llamada emplados con las siguientes
<br/> columnas:
</p>

1. id {PK}
1. nombre
1. edad
1. pais
1. cargo (a que se dedicará dentro de Starbucks)
1. experiencia (años de experiencia/laborando)

<p>
Cuenta con los estándares de una RESTful API con al menos un endpoint por cada
<br/> método HTTP:
</p>

| MÉTODO HTTP  | ENDPOINT |
| ------------- |:-------------:|
| POST: app.post("/create")     | https://mini-proyecto2.herokuapp.com/create |
| GET: app.get("/empleados")     | https://mini-proyecto2.herokuapp.com/empleados|
| PUT: app.put("/update")      | https://mini-proyecto2.herokuapp.com/update |
| DELETE: app.delete("/delete/:id")| https://mini-proyecto2.herokuapp.com/delete/:id|

<p>
Como objetivo cada uno hace lo siguiente:
</p>

1. POST: Con componentes de react en el front puede crear un empleado nuevo al presionar el botón "Registrar".
1. GET: Obtiene y muestra en la tabla los empleados ya existentes en la base de datos.
1. PUT: Con ayuda de componentes de react al presionar el botón "Editar" sobre el empleado que se desea editar PUT actualiza los datos del empleado cuando el usuario presione "Actualizar"
1. DELETE: Se puede eliminar el usuario por completo una vez que se muestra un alerta por Sweet Alert y el usuario hace click sobre "Si, eliminar"

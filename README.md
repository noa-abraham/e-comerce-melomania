# e-comerce-melomania
# IFTS16-Práctica Profesional 1
# Prof. Andrea Abrudsky


# Información importante

*Link al sitio:* https://e-comerce-melomania.vercel.app/

*Para acceder al logeo por usuario ingresar /login.html:* https://e-comerce-melomania.vercel.app/login.html

*CONTRASEÑAS:*

Usuario 1: 

user name: melomania
password: vinilos.

Usuario 2: 

user name: taller1
password: ifts16

# TP-CONSIGNAS

# -Objetivo-------------------------

Se debe realizar un sitio de productos que se administre por el momento con variables estáticas.
Observaciones:

Las entregas se realizan por medio de GitHub, por lo tanto deben tener un proyecto para el grupo y que los miembros del grupo este asociados al proyecto.

Las direcciones de los links, archivos deben ser relativas, permitiendo que no importa donde descargue el proyecto debe adaptarse a la nueva ruta.
El grupo deberá presentar un video donde explique la idea de la página y sus funcionalidades.
Para Diciembre, todos los productos deben obtenerse de un json.


# -Descripción del Sitio----------------------


# A) Características Frontend 
El sitio web debe tener las siguientes funcionalidades

*Home

Página principal del sitio, en donde se mostrarán en forma aleatorios 6 productos de aquellos que fueron indicados como destacados.
Listado de productos.


*listado de los productos

Página donde se muestra el listado de los productos, los cuales pueden estar catalogados por categorías, subcategorías y marcas.
Al tener la opción de categorías se debe poder ver un menú con las categorías principales y al seleccionarlas se van viendo las subcategorías. Al mismo tiempo que se va cambiando entre categorías se debe actualizar el listado de productos basados en las categorías, mostrando primero los destacados y luego los demás.

También se debe tener la opción de elegir el método de ordenamiento de los productos, dichos ordenamientos pueden ser:
Destacados

A->Z
Z->A

No se podrán mostrar los productos que estén inactivos.


*Detalle del producto

Página donde se puede ver la descripción de los productos. Los productos deben tener como base el nombre, descripción, marca, modelo, precio, etc.
Se tiene que tener la opción de poner comentarios. validar los datos ingresados.
Por defecto el comentario debe solicitar ingresar un email, comentario y una valoración del producto (Rank) de 1 a 5. 


*Contáctenos

Formulario por el cual una persona se pone en contacto con los administradores de la página.
Este formulario debe tener las siguientes opciones:
Nombre y apellido
Email
Teléfono
Comentario
Al presionar enviar debe validar los datos ingresados y  levantará un modal (pop up), indicando si está seguro de enviar el comentario. De presionar OK, Mostrará los datos del formulario ingresado e informarán que los datos fueron enviados.



# B) -Características Backend-

El backend debe tener las siguientes funcionalidades:

*Logueo por usuario

Los usuarios deben poder loguearse al sistemas por medio de un email y contraseña. En éste proyecto el usuario y contraseña serán estáticos y fijos.
Sistema de perfil de usuarios. El sistema debe tener dos usuarios con permisos de visualización diferentes.


*Sección de servicios

En esta área se podrán visualizar los servicios definidos , será una guía para el desarrollador.
JSON ó api a la cual me conecto para descargar.


Crear un menu lateral con botones y sub menus.
Debe tener un menú diferenciado.

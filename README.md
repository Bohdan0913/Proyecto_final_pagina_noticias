# Proyecto_final_pagina_noticias:
+ RawGit de JSON1: https://rawgit.com/Bohdan0913/Proyecto_final_pagina_noticias/master/data/data1.json
+ Link Pagina Web: https://rawgit.com/Bohdan0913/Proyecto_final_pagina_noticias/master/news.html

## Correcciones:
+ Poner la frase de debajo de DIABLO 3 como título en news1 y en news2
+ Asignar una clase de boostrap al botón de cargar más noticias
+ Añadir la etiqueta “meta description” en todos los documentos HTML
+ Corregir el contenido de las etiquetas “meta” en los documentos news1 y news2 
+ Hacer que las noticias se carguen al bajar el scroll

## Estructura:
- Para crear la estructura de la página web hemos usado Boostrap.
En la parte superior tenemos “navbar” que es la barra de navegación, contiene acceso a las demás páginas web de mi proyecto, también tiene una imagen pequeña que representa un “D” de Diablo 3.
- Más abajo tenemos “jumbotron” que contiene el titulo principal de la página y una imagen que se cambia cada 7 segundos.
- Ahora llegamos a la parte del contenido, para ello hemos creado un “Container-fluid” que contiene 2 “divs” que tienen las imágenes de anuncios, un “div” está oculto en modo Móvil y visible en modo Desktop y viceversa, con esto conseguimos que cuando estamos en pantalla móvil nos aparece un “div” con unas medidas específicas para móvil y cuando cambiamos a Desktop nos aparece otro “div” con otras medidas específicas para la pantalla. Después de los “divs” tenemos un  “div” con clase “row” que contiene las 3 columnas de las noticias, la “row” lo que hace es agrupar horizontalmente a varias columnas, más abajo tenemos otra “row” que contiene el botón, esta “row” está fiera del contenedor.
- Y por último en la parte inferior tenemos el El footer que es la parte inferior de una estructura web en la que generalmente se incluyen links de navegación, enlaces de interés, copyright o botones a las redes sociales del site. 

## Noticias:
 - Al entrar en la página solo se verán tres noticias, pero en total tenemos nueve, de las primeras tres noticias tenemos que tener acceso a dos, para ello he creado dos HTMLs aparte con el contenido de las primeras dos noticias, para acceder a ellas se tiene que hacer clic en la imagen o el título de la noticia.
 - Al entrar en la página solo se verán tres noticias, pero en total tenemos nueve, de las primeras tres noticias tenemos que tener acceso a dos, para ello he creado dos HTMLs aparte con el contenido de las primeras dos noticias, para acceder a ellas se tiene que hacer clic en la imagen o el título de la noticia.

## Cargar las noticias:
- Para que se puedan cargas las seis noticias al hacer clic en el botón o bajar el scroll he creado dos archivos JSON ubicados en la carpeta llamada DATA, con el contenido de esas seis noticias.
- El contenido de los JSON se añade a la página mediante JavaScript, al hacer clic en el botón o bajar el scroll el JavaScript crea dentro de la “row” de las noticias otras tres columnas y en estas columnas introduce el contenido que hay en el primer JSON, y exactamente igual con las últimas tres noticias, coge el contenido del segundo JSON y lo introduce en las últimas tres columnas.

## Estructura en papel:
- Vista Desktop:
![Imagen vertical](https://github.com/Bohdan0913/Proyecto_final_pagina_noticias/blob/master/img/Desktop.jpg)
##
##
- Vista Móvil:

![Imagen vertical](https://github.com/Bohdan0913/Proyecto_final_pagina_noticias/blob/master/img/movil.jpg)

## Conclusión:
- He conseguido crear las nueve notícias, al principio me he encontrado con problemas para hacer funcionar el JSON pero luego lo he resuelto, también he tenido algunos problemas con ajustar las columnas en la row para que queden bien, también lo solucioné, lo que no he logrado hacer es crear un botón que desactive el scroll.

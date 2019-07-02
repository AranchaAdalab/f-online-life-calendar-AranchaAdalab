## Mood Calendar

La app es el resultado de la tercera prueba técnica del bloque de formación online de Adalab. Consiste en un calendario que irá formándose en función de añadir el ánimo del día seleccionado. Si la opción seleccionada es "feliz", el ususario además podrá agregar un mensaje con una pequeña explicación de por qué hoy se siente bien. Todos los resultados se irán almacenando en LocalStorage, lo que permitirá conservar el calendario aunque se cierre o actualice la página. 

### `Herramientas`

La aplicación se ha creado con HTML, SASS, JAVASCRIPT y REACT. 

### `Planteamiento del ejercicio`

La app consta de dos páginas. A través del "+" ubicado en la primera de ellas, considerada la home (el calendario), se puede acceder a la segunda. Esta es un editor en el que se puede seleccionar la fecha, el estado de ánimo y el mensaje si la elección ha sido "feliz". Una vez se ha terminado, hay dos opciones: guardar o cancelar. En cualquier caso, se vuelve a la home. Si la opción ha sido "guardar", en el calendario aparecerá el resultado de los datos introducidos. Si la opción ha sido "cancelar", se mostrará el calendario tal y como estaba.

### `Estructura por componentes`

src

___app

-------------App.js

-------------App.scss

___editor

-------------Editor.js

-------------Editor.scss

___home

-------------Home.js

-------------Home.scss

___Index.js

___Index.scss


## Si quieres disfrutar de la aplicación o mejorarla puedes clonar el respositorio con el siguiente enlace
https://github.com/Adalab/f-online-pokemon-AranchaAdalab.git

**Nota: no olvides ejecutar npm install**

¡Gracias!

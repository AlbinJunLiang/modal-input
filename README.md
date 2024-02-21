## Modal and Input 

Modal para mostrar mensajes:

![Descripción de la imagen](https://github.com/AlbinJunLiang/modal-input/blob/main/img-tutorial/result%20modal.png?raw=true)

Modal para mostrar ingresar datos:

![Descripción de la imagen](https://github.com/AlbinJunLiang/modal-input/blob/main/img-tutorial/showM.png?raw=true)

## Features - Características

- Funciona para navegadores como Chrome y Edge.
- Funciona para la mayoría celulares y se adapta a la pantalla.
- Se puede modificar y personalizar las caracteristicas de los elementos con CSS.

## Tecnologías y herramientas
- JavaScript / Vanilla JS, HTML5 y DOM
- CSS

 ## Documentación de uso:

**1**-Para agregar el archivo de estilos al HTML con el que estás trabajando, incluye la siguiente línea en la sección `<head>` del documento:

```html
<link rel="stylesheet" href="styles/modalStyles.css" />
```

**2**- Agregar el archivo modalMesage.js al final del body:
```html
<script src="scripts/modalMessage.js"></script>
```
**3**-Crear un contenedor para el modal (Se recomienda un DIV).
```html
<div id="modalContainer"></div>
```

**4**-Usando el DOM inserte el codigo HTML al div, es necesario poner en el primer parametro el ID con el que se va identificar el Modal:

```html
let div = document.getElementById("modalContainer");

div.innerHTML = createModalInput("1", "Pruebas", "Seleccione una opcion: " +
    "<br><br>1-Opcion 1<br>2-Opcion 2<br>3-Opcion 3");
div.innerHTML += createModal("2", "Resultado:", "");
```

**5**-El modal viene acompañado con algunas funciones por si quiere ajustar la posición, los margenes, el alto y ancho de la ventana. El primer argumento de los siguiente métodos es el ID del DIV a modificar.

```javaScript
setModalWidth("1", "650px");
setMargin("1", "5%", "auto", "15%", "auto");


setModalWidth("2", "50%");
setMargin("2", "5%", "auto", "15%", "auto");
```

**6**-Puede usa el metodo  openModal(Id) para mostrar y el closeModal(id) para ocultar.
```JavasScript
  closeModal("2");
  openModal("1");
```

**7**-Para activar los botones del modal se requiere usar eventos. El método getButtonFullID es para obtener el ID especifico del botón a activar, el primer argumento puede ser de tipo **"accept"**o**"cancel"** el segundo argumento es el ID del Modal al que pertenece.
```JavasScript
let acceptInput = document.getElementById(getButtonFullID("accept", "1"));
acceptInput.addEventListener('click', function () {
    openModal("2");
});
```
Puede usar también los nombre de clases del DIV y sus componentes
```JS
let cancelBtn = document.querySelector(".cancelBtn");
cancelBtn.addEventListener('click', function () {
    closeModal("1");
});
```


### Recomendaciones:
- Se puese cerrar los modal con el boton **x** de la esquina superior derecha:
- Revisar el código implementado del repositorio para dar mas detalles.
- El método getInputText() es para obtener el texto de un modal con textarea y el setText(ID) es para agregar texto a un modal de tipo mostrar.
- Preferiblemete mejorar el diseño con CSS y etc.





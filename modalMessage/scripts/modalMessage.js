/**
 * Clase para manejo de mensajes flotantes en js.
 * 
 * -Funciona para navegadores como Chrome y Edge.
 * -Funciona para celulares y se adapta a la pantalla.
 * -Puede modificar y personalizar las caracteristicas de los elementos con CSS.
 * 
 * fecha: 20/2/2024
 */


/**
 * Crea el HTML necesario para generar un modal en una página web con el contenido proporcionado.
 * 
 * @param {string} idModal - El ID único que se asignará al modal.
 * @param {string} title - El título que se mostrará en el modal.
 * @param {string} text - El texto principal que se mostrará en el cuerpo del modal.
 * @returns {string} Una cadena de texto que representa el HTML del modal.
 */

function createModal(idModal, title, text) {
    let content = `
        <div id="${idModal}" class="myModal">
            <div class="modal-content" id="modal-content_${idModal}">
                <span class="closeBtn" onclick="closeModal('${idModal}')">&times;</span>
                <div class= title-content>
                <p class="title">${title}</p>
                </div>
                <div class= text-content>
                <p class="text" id="text_${idModal}">${text} </p>
                </div>
                <div class= button-content>
                <button class="acceptBtn" id="accept_${idModal}">Aceptar</button>
                </div>
            </div>
        </div>`;
    return content;
}

/**
 * Crea el HTML necesario para generar un modal de confirmación en una página web con el contenido proporcionado.
 * Este modal incluye un botón de aceptar y un botón de cancelar.
 * 
 * @param {string} idModal - El ID único que se asignará al modal.
 * @param {string} title - El título que se mostrará en el modal.
 * @param {string} text - El texto principal que se mostrará en el cuerpo del modal.
 * @returns {string} Una cadena de texto que representa el HTML del modal de confirmación.
 */

function createModalConfirm(idModal, title, text) {
    let content = `
        <div id="${idModal}" class="myModal">
            <div class="modal-content" id="modal-content_${idModal}">
                <span class="closeBtn" onclick="closeModal('${idModal}')">&times;</span>
                <div class= title-content>
                <p class="title">${title}</p>
                </div>
                <div class= text-content>
                <p class="text" id="text_${idModal}">${text}</p>
                </div>
                <div class= button-content>
                <button class="acceptBtn" id="accept_${idModal}">Aceptar</button>
                <button class="cancelBtn" id="cancel_${idModal}">Cancelar</button>
                </div>
            </div>
        </div>`;
    return content;
}

/**
 * Crea el HTML necesario para generar un modal con campo de entrada de texto en una página web con el contenido proporcionado.
 * Este modal incluye un campo de entrada de texto y botones de aceptar y cancelar.
 * 
 * @param {string} idModal - El ID único que se asignará al modal.
 * @param {string} title - El título que se mostrará en el modal.
 * @param {string} text - El texto principal que se mostrará en el cuerpo del modal.
 * @returns {string} Una cadena de texto que representa el HTML del modal con campo de entrada de texto.
 */

function createModalInput(idModal, title, text) {
    let content = `
        <div id="${idModal}" class="myModal">
            <div class="modal-content" id="modal-content_${idModal}">
                <span class="closeBtn" onclick="closeModal('${idModal}')">&times;</span>
                <div class="title-content">
                    <p class="title">${title}</p>
                </div>
                <div class= text-content>
                <p class="text" id="text_${idModal}">${text} </p>
                </div>
                <div class="text-input">
                    <textarea class="input" id="input_${idModal}" placeholder="Ingrese texto..."></textarea>
                </div>
                <div class="button-content">
                    <button class="acceptBtn" id="accept_${idModal}">Aceptar</button>
                    <button class="cancelBtn" id="cancel_${idModal}"}">Cancelar</button>
                </div>
            </div>
        </div>`;
    return content;
}

/**
 * Obtiene el texto del textarea de createModalInput
 */
function getInputText() {
    let input = document.querySelector(".input");
    return input.value;
}

/**
 * Limpia el campo del textarea
 * 
 * @param {string} id Recibe el id del elemento modal
 */
function cleanTextArea(id) {
    let element = document.getElementById("input_" + id);
    element.value = '';
}

/**
 * Obtiene el formato ID del elemento boton de los modals
 * @param {*} type 
 * @param {*} id 
 * @returns 
 */
function getButtonFullID(type, id) {
    return type + "_" + id;
}

/**
 * Establece el texto de un elemento HTML identificado por su ID.
 * 
 * @param {string} id - El ID del elemento HTML al que se le cambiará el texto.
 * @param {string} text - El texto que se asignará al elemento HTML.
 * @returns {void}
 */
function setText(id, text) {
    let element = document.getElementById("text_" + id);
    element.innerHTML = text;
}

/**
 * Establece el ancho de un modal identificado por su ID.
 * 
 * @param {string} id - El ID del modal al que se le cambiará el ancho.
 * @param {string} width - El nuevo ancho del modal (puede ser un valor en píxeles, porcentaje, etc.).
 * @returns {void}
 */

function setModalWidth(id, width) {
    const content = document.getElementById("modal-content_" + id);
    content.style.width = width;
}

/**
 * Establece la altura de un modal identificado por su ID.
 * 
 * @param {string} id - El ID del modal al que se le cambiará la altura.
 * @param {number} height - La nueva altura del modal en píxeles.
 * @returns {void}
 */

function setModalHeight(id, height) {
    const content = document.getElementById("modal-content_" + id);
    content.style.height = height + "px";
}

/**
 * Establece el margen de un modal identificado por su ID.
 * 
 * @param {string} id - El ID del modal al que se le cambiará el margen.
 * @param {string} top - El margen superior del modal (puede ser un valor en píxeles, porcentaje, etc.).
 * @param {string} right - El margen derecho del modal (puede ser un valor en píxeles, porcentaje, etc.).
 * @param {string} bottom - El margen inferior del modal (puede ser un valor en píxeles, porcentaje, etc.).
 * @param {string} left - El margen izquierdo del modal (puede ser un valor en píxeles, porcentaje, etc.).
 * @returns {void}
 */

function setMargin(id, top, right, bottom, left) {
    const content = document.getElementById("modal-content_" + id);
    content.style.marginTop = top;
    content.style.marginRight = right;
    content.style.marginBottom = bottom;
    content.style.marginLeft = left;

}

/**
 * Muestra el modal
 * @param {*} idModal 
 */

function openModal(idModal) {
    document.getElementById(idModal).style.display = "block";
}
/**
 * Oculta el modal
 * @param {*} idModal 
 */
function closeModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}






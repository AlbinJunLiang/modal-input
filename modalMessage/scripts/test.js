
let body = document.getElementById("modalContainer");


body.innerHTML = createModalInput("1", "Pruebas", "Seleccione una opcion: " +
    "<br><br>1-Opcion 1<br>2-Opcion 2<br>3-Opcion 3");
body.innerHTML += createModal("2", "Resultado:", "");

setModalWidth("1", "650px");
setMargin("1", "5%", "auto", "15%", "auto");


setModalWidth("2", "50%");
setMargin("2", "5%", "auto", "15%", "auto");

let button1 = document.getElementById("button1");
button1.addEventListener('click', function () {
    cleanTextArea('1');
    openModal("1");
});


let acceptInput = document.getElementById(getButtonFullID("accept", "1"));
acceptInput.addEventListener('click', function () {
    closeModal("1");
    let str = actions(getInputText());
    setText("2", str);
    openModal("2");
});

let acceptInput2 = document.getElementById(getButtonFullID("accept", "2"));
acceptInput2.addEventListener('click', function () {
    closeModal("2");
    cleanTextArea('1');
    openModal("1");

});


let cancelBtn = document.querySelector(".cancelBtn");

cancelBtn.addEventListener('click', function () {
    closeModal("1");
});


function actions(option) {
    let ouput = "";

    switch (parseInt(option)) {
        case 1:
            ouput = "La opcion es 1";
            break;
        case 2:
            ouput = "La opcion es 2";
            break;
        case 3:
            ouput = "La opcion es 3";
            break;
        default:
            ouput = "La opcion no se encuentra disponible";

    }
    return ouput;
}
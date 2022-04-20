
const form = document.querySelector("form");

form.addEventListener('submit', e => { 
    const inputNames = document.querySelector('#name');

    if (!valChars(inputNames.value)) {
        errorInput("#names");
        e.preventDefault();
    } else {
        noErrorInput("#names");
    }
 });








function valChars(chars) {
    const r = /^[A-Z\u00f1\u00d1 _]+$/i;
    return r.test(chars);
}

function valNumbers(numbers) {
    const r = /[^0-9]/;
    return (!r.test(numbers)) && numbers.length > 0;
}

function valEmail(email) {
    /**
     * https://www.w3resource.com/javascript/form/email-validation.php
     */
    const r = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return r.test(email);
}

function valPasswd(passwd) {
    /**
     * https://programacion.net/articulo/25_expresiones_regulares_que_todo_programador_web_deberia_conocer_1213
     */
    const r = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return r.test(passwd);
}

function errorInput(id) {
    const error = document.querySelector(id);
    error.classList.remove("text-muted");
    error.classList.add("text-danger");
}

function noErrorInput(id) {
    const error = document.querySelector(id);
    error.classList.remove("text-muted");
    error.classList.remove("text-danger");
    error.classList.add("text-success");
}

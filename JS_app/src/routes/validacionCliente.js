
const nombre = document.getElementById("name");
const nit = document.getElementById("nit");
const ubicacion = document.getElementById("ubicacion");
const correo = document.getElementById("correo");
const pname = document.getElementById("pName");
const pnit = document.getElementById("pNit");
const pubi = document.getElementById("pUbi");
const pcorreo = document.getElementById("pCorreo");
const listInputs = document.querySelectorAll(".form-input");


document.getElementById('form').addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});


function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });


  if (nombre.value.length < 2 || nombre.value.trim() == "") {
    pname.innerHTML="<p class='mensajeError' >Nombre muy corto o vacio*</p>";
    condicion = false;
  }

  if (nit.value<1000000 ) {
    pnit.innerHTML="<p class='mensajeError' >Cedula o nit no Valido*</p>";
    condicion = false;
  }
  if (ubicacion.value.length < 6 || ubicacion.value.trim() == "") {
    pubi.innerHTML="<p class='mensajeError' >Ubicación muy corta o vacia*</p>";
    condicion = false;
  }
  if (correo.value.length < 6 || correo.value.trim() == "") {
    pcorreo.innerHTML="<p class='mensajeError' >Correo muy corto o vacio*</p>";
    condicion = false;
  }
  return condicion;
}



function enviarFormulario() {
  confirm("Seguro que desea registrar al Cliente "+nombre.value)
    

    window. location. reload();
  
  
  
}
//Creamos la funcion para llamar a las paginas y hacer el cambio entre ellas

const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_adelante5 = document.querySelector(".adelante-pag5");
const btn_atras4 = document.querySelector(".volver-pag4");
//const btn_final = document.querySelector(".finalizar")

// Creamos la funcion para que el usuario necesariamente tenga que llenar todos los campos

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let max = 5;
let cont = 1;

// Configuramos los botones"

btn_adelante2.addEventListener("click", function(e){
    e.preventDefault()

    //Creamos las variables y las funciones para que el usuario no pueda pasar de pagina con campos en blanco 
    var nombres = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNa = document.getElementById("fechaNac").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var numeroTel = document.getElementById("numero").value;

    if(nombres==""){
        document.getElementById("nombres-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("nombres").style.borderColor = "red";
    }else{
        document.getElementById("nombres-error").innerHTML = "";
        document.getElementById("nombres").style.borderColor = "white";

        movPag.style.marginLeft = "-25%";
        num[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        cont += 1;
    }

    if (apellido=="") {
        document.getElementById("apellido-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("apellido").style.borderColor = "red";
    } else {
        document.getElementById("apellido-error").innerHTML = "";
        document.getElementById("apellido").style.borderColor = "white";
    }

    if (fechaNa=="") {
        document.getElementById("fechaNac-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("fechaNac").style.borderColor = "red";
    } else {
        document.getElementById("fechaNac-error").innerHTML = "";
        document.getElementById("fechaNac").style.borderColor = "white";
    }

    if (nacionalidad=="") {
        document.getElementById("nacionalidad-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("nacionalidad").style.borderColor = "red";
    } else {
        document.getElementById("nacionalidad-error").innerHTML = "";
        document.getElementById("nacionalidad").style.borderColor = "white";
    }

    if (numeroTel=="") {
        document.getElementById("numero-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("numero").style.borderColor = "red";
    } else {
        document.getElementById("numero-error").innerHTML = "";
        document.getElementById("numero").style.borderColor = "white";
    }
    

});

btn_adelante3.addEventListener("click", function(e){
    e.preventDefault()

    //Creamos las variables y las funciones para que el usuario no pueda pasar de pagina con campos en blanco 
    var nombre = document.getElementById("nombre").value;
    var parentesco = document.getElementById("parentesco").value;
    var edad = document.getElementById("edad").value;

    if (nombre=="" || parentesco=="" || edad=="") {
        document.getElementById("nombre-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("nombre").style.borderColor = "red";

        document.getElementById("parentesco-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("parentesco").style.borderColor = "red";

        document.getElementById("edad-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("edad").style.borderColor = "red";
    } else {
        document.getElementById("nombre-error").innerHTML = "";
        document.getElementById("nombre").style.borderColor = "white";

        document.getElementById("parentesco-error").innerHTML = "";
        document.getElementById("parentesco").style.borderColor = "white";

        document.getElementById("edad-error").innerHTML = "";
        document.getElementById("edad").style.borderColor = "white";

        movPag.style.marginLeft = "-50%";
        num[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        cont += 1; 
    }
});

btn_adelante4.addEventListener("click", function(e){
    e.preventDefault();

    // Creamos las variables y las funciones para que el usuario no pueda pasar de página con campos en blanco
    var enfermedad = document.getElementById("enfermedad").value;
    var tiempo = document.getElementById("tiempo").value;
    var detalle = document.getElementById("detalle").value;

    if (enfermedad=="" || tiempo =="") {
        document.getElementById("enfermedad-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("enfermedad").style.borderColor = "red";

        document.getElementById("tiempo-error").innerHTML = "* Este campo es obligatorio.";
        document.getElementById("tiempo").style.borderColor = "red";
    } else {
        document.getElementById("enfermedad-error").innerHTML = "";
        document.getElementById("enfermedad").style.borderColor = "white";

        document.getElementById("tiempo-error").innerHTML = "";
        document.getElementById("edad").style.borderColor = "white";

        document.getElementById("detalle-error").innerHTML = "";
        document.getElementById("detalle").style.borderColor = "red";

        obtenerDatos(); // Mostrar los datos en la página 5

        movPag.style.marginLeft = "-75%";
        num[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        cont += 1;
    }
});

btn_adelante5.addEventListener("click", function(e){
    e.preventDefault();

    obtenerDatos(); // Mostrar los datos en la página 5

    movPag.style.marginLeft = "-100%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
});

function obtenerDatos() {
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNac").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var numeroTelefono = document.getElementById("numero").value;
  
    var datosPersonales = document.getElementById("datos-personales");
    datosPersonales.innerHTML = `
      <p>Nombre: ${nombre}</p>
      <p>Apellido: ${apellido}</p>
      <p>Fecha de Nacimiento: ${fechaNacimiento}</p>
      <p>Nacionalidad: ${nacionalidad}</p>
      <p>Número de Teléfono: ${numeroTelefono}</p>
    `;
  
    var nombreFamiliar = document.getElementById("nombre").value;
    var parentesco = document.getElementById("parentesco").value;
    var edad = document.getElementById("edad").value;
  
    var familiares = document.getElementById("familiares");
    familiares.innerHTML = `
      <p>Nombre del Familiar: ${nombreFamiliar}</p>
      <p>Parentesco: ${parentesco}</p>
      <p>Edad: ${edad}</p>
    `;
  
    var enfermedad = document.getElementById("enfermedad").value;
    var tiempo = document.getElementById("tiempo").value;
    var detalle = document.getElementById("detalle").value;
  
    var condicionesSalud = document.getElementById("condiciones-pre-existentes");
    condicionesSalud.innerHTML = `
      <p>Enfermedad: ${enfermedad}</p>
      <p>Tiempo con la Enfermedad: ${tiempo}</p>
      <p>Detalle de la Enfermedad: ${detalle}</p>
    `;
  
    var fechaInternamiento = document.getElementById("fecha").value;
    var centroMedico = document.getElementById("centroMed").value;
    var diagnostico = document.getElementById("diagnostico").value;
  
    var internamientos = document.getElementById("internamientos-realizados");
    internamientos.innerHTML = `
      <p>Fecha de Internamiento: ${fechaInternamiento}</p>
      <p>Centro Médico: ${centroMedico}</p>
      <p>Diagnóstico: ${diagnostico}</p>
    `;
  
    movPag.style.marginLeft = "-100%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
}

const btn_final = document.getElementById("finalizar");

btn_final.addEventListener("click", function(e) {
  e.preventDefault();
  // Código para volver al primer paso de registrar datos
});

btn_final.addEventListener("click", function(e) {
    e.preventDefault();
    // Restablecer el formulario
    document.getElementById("registro").reset();
    // Volver al primer paso de registrar datos
    movPag.style.marginLeft = "0";
    // Reiniciar el contador y la visualización de progreso
    cont = 1;
    for (let i = 0; i < max; i++) {
      num[i].classList.remove("active");
      progressCheck[i].classList.remove("active");
      progressText[i].classList.remove("active");
    }
  });
  

// Configuramos los botones de "Atras"

btn_atras1.addEventListener("click", function(e){
    e.preventDefault()
    movPag.style.marginLeft = "0%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras2.addEventListener("click", function(e){
    e.preventDefault()
    movPag.style.marginLeft = "-25%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras3.addEventListener("click", function(e){
    e.preventDefault()
    movPag.style.marginLeft = "-50%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras4.addEventListener("click", function(e){
    e.preventDefault()
    movPag.style.marginLeft = "-75%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});





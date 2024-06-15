const formularioRegister=document.getElementById("formulario")
const inputNombre=document.getElementById("nombre");
const inputEmail=document.getElementById("email");
const inputSeleccione=document.getElementById("seleccione");
const parrafo=document.getElementById("error");
const mensajeEnviado = document.getElementById("mensajeEnviado");


// console.log(inputNombre);

formularioRegister.addEventListener("submit",e=>{
e.preventDefault();
let warning="";
let valor=false;
parrafo.innerHTML="";
let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

if(inputNombre.value.length<3){
   warning+="Escriba un nombre<br>"
   valor=true;
}
if(!regexEmail.test(inputEmail.value)){
    warning+="Escriba un email válido<br>"
    valor=true;
}
if(inputSeleccione.value=="default"){
    warning+="Elija una opcion <br>"
    valor=true;
}
if(valor){
    parrafo.innerHTML=warning;
}else{
    parrafo.innerHTML="Su solicitud fue enviada correctamente te responderemos pronto"
    formRegister.reset();
}
})

if (window.alert("¡Formulario enviado con éxito!")) {
    window.location.reload();
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    // Aquí puedes realizar otras acciones (enviar datos al servidor, etc.)

    // Muestra el mensaje de éxito
    mensajeEnviado.style.display = "block";
});

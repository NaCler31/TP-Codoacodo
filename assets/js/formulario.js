const formRegister=document.getElementById("formulario")
const inputNombre=document.getElementById("nombre");
const inputEmail=document.getElementById("email");
const inputMotivo=document.getElementById("motivo");
const parrafo=document.getElementById("error");

// console.log(inputNombre);

formRegister.addEventListener("submit",e=>{
e.preventDefault();
let warning="";
let valor=false;
parrafo.innerHTML="";
let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(inputNombre.value.length<3){
   warning+=`Escriba un nombre<br>`
   valor=true;
}
if(!regexEmail.test(inputEmail.value)){
    warning+=`Escriba un email<br>`
    valor=true;
}
if(inputMotivo.value=="default"){
    warning+=`Elija una opcion <br>`
    valor=true;
}
if(valor){
    parrafo.innerHTML=warning;
}else{
    parrafo.innerHTML="Su solicitud fue enviada correctamente te responderemos pronto";
    formRegister.reset();
}
})

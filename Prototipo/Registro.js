const email = document.getElementById("mail");


email.addEventListener("input",(event)=>{
if (email.validity.typeMisMatch){
    email.setCustomValidity("Correo no valido")
    email.reportValidity()
    
}else{
    email.setCustomValidity("")
    
}
})


function guardar_correo(){
    var correo= document.getElementById("mail").value;       
    localStorage.setItem("mail", correo);
}
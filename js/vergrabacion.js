ruta_video();

function ruta_video(){
    let ruta= "C:\Users\Mario\Videos\tlatelolco"+localStorage.getItem("mail")+".webm";

    document.getElementById("grabacion")
    .src= "../videos/"+localStorage.getItem("mail")+".webm";
    console.log(ruta);
    // location.reload();

}
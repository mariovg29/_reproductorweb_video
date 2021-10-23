///////Tomar y Guardar Foto/////////////////////
      
const video= document.getElementById('video');
navigator.mediaDevices.getUserMedia({audio:true, video: true})
.then(
    (stream)=>{
        video.srcObject= stream;
        
    }
).catch(
    (error)=>{
        console.log(error);

    }
)
document.getElementById('takevideo').addEventListener("click", ()=>{
    takephoto();

});

function takephoto(){
    const canvas = document.getElementById("fotocanvas");
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 300, 300);  
    
    let foto= canvas.toDataURL();
    let enlace = document.createElement('a'); 
    enlace.download = "$v1";
    enlace.href=foto;
    enlace.click();   
    enlace.click();   
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    
}
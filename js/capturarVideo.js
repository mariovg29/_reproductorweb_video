///////Tomar y Guardar Video/////////////////////
      
const video= document.getElementById('video');

    navigator.mediaDevices.getUserMedia({audio:true, video: true})
.then(
    (record)
).catch(
    (error)=>
        console.log(error));

        

    


let arrvideo=[];
function record(stream){
    video.srcObject= stream;
    let mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=h264,vp9,opus'
    });
    document.getElementById('takevideo').addEventListener("click", ()=>{
        mediaRecorder.start();
        setTimeout(()=>mediaRecorder.stop(),5000);
    
    });

    

    mediaRecorder.ondataavailable= function(e){
        console.log(e.data);
        arrvideo.push(e.data);

    }

    mediaRecorder.onstop = function (){
        alert("Finalizó la grabación");

        let blob = new Blob(arrvideo, {type: "video/webm"});
        arrvideo =[];
        download(blob);
    }
    

    function download(blob){
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", "video_recorded.webm");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        link.click();
        
        link.remove();
    }

}
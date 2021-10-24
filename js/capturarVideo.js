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
    $duracion = document.querySelector("#duracion"),
    
   
    video.srcObject= stream;
    let mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=h264,vp9,opus'
    });
    var btn= document.getElementById("takevideo");
    var temp = document.getElementById(" duración2");
    document.getElementById('takevideo').addEventListener("click", Start);

        function Start(){
        mediaRecorder.start(),
       
        
        
        console.log("Started");
        btn.removeEventListener("click", Start);
        btn.addEventListener("click", Stop);
        btn.value = "Stop";
        let temporizador = new Temporizador('temporizador', 299, 0, 60);
       temporizador.conteoSegundos();
       setTimeout(()=>mediaRecorder.stop(), 301000);
        
    }
    
    function Stop(){
        mediaRecorder.stop(),
        console.log("Stopped");
        btn.removeEventListener("click", Stop);
        btn.addEventListener("click", Start);
        btn.value = "start";
        temp.value="00:00";
    }

    

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
        link.remove();
    }
    class Temporizador {
        constructor(id, inicio, fin, contadorsec) {

            this.id = id;
            this.inicio = inicio;
            this.fin = fin;
            this.contador = inicio;
            this.contadorsec = contadorsec;
            this.conteoSegundos = function () {
                if (this.contador == this.fin) {
                    this.conteoSegundos = null;
                    return;
                }
                let tiempo = this.contador;
                let min = tiempo / 60;
                var minutos = Math.trunc(min);
                var showseconds = "00";
                var showsecondsreal = this.contadorsec;
                this.contadorsec--;
                if (minutos < 10)
                    minutos = "0" + minutos;
                if (this.contadorsec < 10)
                    this.contadorsec = "0" + this.contadorsec;
                if (this.contadorsec == 60) {
                    document.getElementById("duracion2").innerHTML = minutos + ":" + showseconds;
                } else { document.getElementById("duracion2").innerHTML = minutos + ":" + this.contadorsec; }
                if (this.contadorsec < 1)
                    this.contadorsec = 60;






                document.getElementById("duracion").innerHTML = this.contador--;
                //    document.getElementById("duracion2").innerHTML =minutos+":"+this.contadorsec;
                setTimeout(this.conteoSegundos.bind(this), 1000);

            };

        }
    }
    

}
///////Tomar y Guardar Video/////////////////////
      

const video= document.getElementById('video');

    navigator.mediaDevices.getUserMedia({audio:false, video: true})
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
            recording();
        mediaRecorder.start(),
        console.log("Started");
        btn.removeEventListener("click", Start);
        btn.addEventListener("click", Stop);
        document.getElementById("takevideo").innerHTML = "<span>Detener grabación</span> ";
        btn.value = "Stop";
        let temporizador = new Temporizador('temporizador', 299, 0, 60);       
       temporizador.conteoSegundos(),
       setTimeout(()=>mediaRecorder.stop(), 301000);
        
    }
    
    function Stop(){
        mediaRecorder.stop(),
        console.log("Stopped");
        btn.removeEventListener("click", Stop);
        btn.addEventListener("click", Start);
        document.getElementById("takevideo").innerHTML = "<span>Comenzar a Grabar</span> ";
        btn.value = "start";
        // temp.value="00:00";
    }

    

    mediaRecorder.ondataavailable= function(e){
        console.log(e.data);
        arrvideo.push(e.data);

    }

    mediaRecorder.onstop =  function (){
        // alert("Finalizó la grabación");
        // Swal.fire({
        //     position: 'top-end',
        //     icon: 'success',
        //     title: 'Finalizó la grabación',
        //     showConfirmButton: true,
        //     timer: 2000
        //   })
        stopRecording();
        alerta();

        let blob = new Blob(arrvideo, {type: "video/webm"});
        arrvideo =[];               
        download(blob);
        
        
    }
    

    function download(blob){
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download",localStorage.getItem("mail")+".webm");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        link.remove();
        redireccionar();
        
    }
    var count =4;
    function redireccionar(){
    setInterval(() => {
        count--;
        if(count == 0){
            window.location = '../html/ver_grabacion.html';
            console.log(count);
        }
        
    }, 1000);

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






                // document.getElementById("duracion").innerHTML = this.contador--;
                //    document.getElementById("duracion2").innerHTML =minutos+":"+this.contadorsec;
                setTimeout(this.conteoSegundos.bind(this), 1000);

            };

        }
    }
    function alerta(){
        let timerInterval
Swal.fire({
  title: 'Procesando video',
  html: 'Espera...',
  timer: 4000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()    
    timerInterval = setInterval(() => {      
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    }

    function recording(){
        const rec= document.querySelector("#recording-none");
        rec.classList.remove("recording-none");
        rec.classList.add("recording-ok");
    }
    function stopRecording(){

        const temporizador= document.querySelector("#temporizador");
        const rec= document.querySelector("#recording-none");
        temporizador.classList.add("recording-none")
        rec.classList.remove("recording-ok");
        rec.classList.add("recording-none");

    }
    

}
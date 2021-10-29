let url = "../php/consultaVideos.php"
const btnCierra = document.querySelector('#btn-cierra');
const reproductor = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');

fetch(url)
.then(response =>response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))
const mostrarData = (data)=>{
    const imagenes = document.querySelectorAll('#galeria img, video');
    // console.log(imagenes);
    
    // console.log(data);
    let body= '';
    for(let i=0; i<data.length; i++){
        let ruta ='../videos/';
        let correo= data[i].CORREO;
        let tipo= '.webm';
        let dir= ruta+correo+tipo; 

        body+= `<div class = 'galerias' id= 'galerias' loop='loop' >
        <video 
        src ='${dir}' 
        width='200' 
        height='200'
        
        onclick = alerta('${dir}')
        ></video></div>`
    }
    document.getElementById('cont-videos').innerHTML=body;
}
function alerta(dir){
    imagenActiva.src = dir;
    reproductor.style.display = 'flex';
    console.log(`${dir}`);
    
}
// const abreReproductor = (event) => {
//     imagenActiva.src = `${url}`;
//     reproductor.style.display = 'flex';
//     console.log(imagenes);
//     indiceImagen = Array.from(imagenes).indexOf(event.target);
//   };
  
//   imagenes.forEach((imagen) => {
//     imagen.addEventListener('click', abreReproductor);
//   });
btnCierra.addEventListener('click', () => {
    reproductor.style.display = 'none';
  });


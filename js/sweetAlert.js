(async()=>{
    // const {value: ruta} = 
    await Swal.fire({
        html:
            '<strong><p class= "title">XALTILOLLI</p></strong>'+
            
            '<p class= "rojo ">Espacio de artes, memorias y resistencias</p>'+
      
              '<h2 class = "cuentanos ">Cuentanos sobre tu experiencia y vivencia en Tlatelolco<h2>'+
              '<div class = "contenedor-botones">'+
              // <a href="html/formulario.html" >'+
              // '<button class = "btn"> <strong<span>Grabar Testimonio</span></strong> </button> </a>'+     
              // '<a href="html/colage_videos.html" >'         
              // +'<button class = "btn"> <strong><span>Ver Testimonios</span></strong></button> </a>'+
                  '<a class = "btn izq" href="html/formulario.html"    ><span>Grabar Testimonio</span></a>'+
                  '<a class = "btn izq" href="php/colage_videos.php" ><span>Ver Testimonios  </span></a>'+
              '</div>'
              
              
            //  , +
            //   '<button onClick=())=>mostrarAlerta() >Grabar testimonio</button><button>Ver Testimonios</button>'
              ,
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            focusConfirm: false,            
            width:'60%',
            allowOutsideClick: false,
            background:'rgba(255, 255, 255, .9)',
//             // input: 'select',
//             // inputPlaceholder: 'País',
//             // inputValue: '',
//             // inputOptions: {
//             //     mexico: 'Mexico',
//             //     españa: 'España',
//             //     francia: 'Francia'
//             // }
    } )
//     //.then(resultado=>{
//     //     if(resultado.value){
//     //         alert('grabar');
//     //     }else{
//     //         alert('Ver Testimonios')
//     //     }
//     // })
//     // if(ruta){
//     //     alert(ruta);
//     // }

})()



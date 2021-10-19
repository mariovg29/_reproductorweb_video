(async()=>{
    const {value: ruta} = await Swal.fire({
        html:
            '<strong><p class= "title">XALTILOLLI</p></strong>'+
            
            '<p class= "rojo ">Espacio de artes, memorias y resistencias</p>'+
      
              '<h2 class = "cuentanos ">Cuentanos sobre tu experiencia y vivencia en Tlatelolco<h2>'+
              '<a href="html/formulario.html"><button >hola</button</a>> <button>hola</button>'
            //  , +
            //   '<button onClick=())=>mostrarAlerta() >Grabar testimonio</button><button>Ver Testimonios</button>'
              ,
            showCloseButton: false,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Grabar Testimonio',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
            '<i class="fa fa-thumbs-up"></i> Ver Testimonios',
            cancelButtonAriaLabel: 'Thumbs down',
            width:'60%',
            allowOutsideClick: false,
            background:'rgba(255, 255, 255, .8)',
            // input: 'select',
            // inputPlaceholder: 'País',
            // inputValue: '',
            // inputOptions: {
            //     mexico: 'Mexico',
            //     españa: 'España',
            //     francia: 'Francia'
            // }
    } ).then(resultado=>{
        if(resultado.value){
            alert('grabar');
        }else{
            alert('Ver Testimonios')
        }
    })
    // if(ruta){
    //     alert(ruta);
    // }

})()



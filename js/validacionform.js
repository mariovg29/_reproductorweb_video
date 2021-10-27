const formulario = document.getElementById("datos");
const inputs = document.querySelectorAll('#datos input');

const expresiones = {
	usuario: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e)=>{
    switch (e.target.name){
        case "nombre":        
        if(expresiones.usuario.test(e.target.value)){
            document.getElementById('input-nombre').classList.remove('datos-incorrecto');
            document.getElementById('input-nombre').classList.add('datos-correcto');
            document.getElementById('palertnombre').classList.remove('msjerrorinput-incorrecto');
            document.getElementById('palertnombre').classList.add('msjerrorinput');
            document.querySelector('#datos i').classList.remove('fa-times-circle');
            document.querySelector('#datos i').classList.add('fa-check-circle');
           

        }else{
            document.getElementById('input-nombre').classList.add('datos-incorrecto');
            document.getElementById('input-nombre').classList.remove('datos-correcto');
            document.getElementById('palertnombre').classList.add('msjerrorinput-incorrecto');
            document.getElementById('palertnombre').classList.remove('msjerrorinput');
            document.querySelector('#datos i').classList.add('fa-times-circle');
            
            
        }
        break;
        case "mail":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('input-mail').classList.remove('datos-incorrecto');
                document.getElementById('input-mail').classList.add('datos-correcto');
                document.getElementById('palertcorreo').classList.remove('msjerrorinput-incorrecto');
                document.getElementById('palertcorreo').classList.add('msjerrorinput');
                document.querySelector(' #input-mail i ').classList.add('fa-check-circle');
                document.querySelector(' #input-mail i ').classList.remove('fa-times-circle');
                
            }else{
                document.getElementById('input-mail').classList.add('datos-incorrecto');
                document.getElementById('input-mail').classList.remove('datos-correcto');
                document.getElementById('palertcorreo').classList.add('msjerrorinput-incorrecto');
                document.querySelector(' #input-mail i ').classList.add('fa-times-circle');
            }
        break;
        
    }

   

}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario )
    input.addEventListener('blur',validarFormulario )

});

// formulario.addEventListener('submit', (e)=>{
//     e.preventDefault();
// });
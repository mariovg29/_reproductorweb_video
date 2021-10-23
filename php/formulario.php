<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel= "stylesheet" href="../css/formulario.css"> -->
    <link rel= "stylesheet" href="../css/sweetalert2.css">
    <title>Formulario</title>

</head>
<body>

    
        <div class="contenedor-botones">
            <div id= izquierda>
                <img class = "img" src="../img/fondo.png" alt="Cargando Imagen...">
            </div>

            <div id="derecha">
                <div class="contenedor-logo" >
                    <div class= "izqlogo">
                        <h1>
                            XLTI
                        </h1>
                    </div>
                    <div class= "derlogo">
                        <p>
                            Xaltilolli<br/>
                            espacio de artes,     <br/>
                            memorias y residencias
                        </p>
                    </div>
                </div>
                <div class = "contenedor-formulario">
                    <div class="formulario">
                        <h1 >
                            
                            Registra tu Testimonio
                            <br>
                        </h1>
                        <div class="datos">
                            <form method="post">
                            <!-- "http://localhost:8080/reproductordual/_reproductorweb_video/html/grabar.html" -->
                            
                            
                                <br>
                                <br>
                                <label for="nombre">Nombre completo</label>
                                <br/>
                                <input class="text-input"
                                    type="text" 
                                    id="nombre" 
                                    name="nombre" 
                                    placeholder="Ingresa tu nombre"
                                    title=" Solo letras y espacios en blanco"
                                    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                    onkeyup="validar(this.form)"
                                    required
                                    />
                                <br/>
                                <br/>
                                <br>
                                <label for="mail">Correo Electrónico</label>
                                <br>
                               
                                <input class="text-input"
                                    type="email" 
                                    id="mail" 
                                    name="mail"
                                    placeholder="ingresa tu correo"
                                    title="Email incorrecto" 
                                    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                                    onkeyup="validar(this.form)"
                                    required                                   
                                    />
                                <br/>
                                <br/>
                                <br>
                                <br>

                        </div>                       
                        
                            <input  
                            type="submit" 
                            name= "Siguiente" 
                            value="Siguiente" 
                            class="btn izq" 
                            disabled ="disabled"
                                                     
                            
                             >
                            <!-- <a class = "btn izq" href="./eleccion.html", onclick ="sub()"><span>Siguiente</span></a> -->
                           
                        </form>
                    </div>
                </div>
                
            </div>
           
        </div>
        <script>
            function validar(frm){
                frm.Siguiente.disabled=(frm.mail.value==''|| frm.nombre.value=='');
                
            //     const nombre = document.getElementById("nombre");
            //     const correo = document.getElementById("mail");
            //     if(nombre.value !=" " && correo.value !=" "){
            //         document.getElementById('Siguiente').disabled="";
            //     }else{
            //         document.getElementById('Siguiente').disabled=true;
            //     }
            // 
        }
          
        </script>

        
        <?php
     require ("registrar.php");
    
     ?>
       
</body>
</html>
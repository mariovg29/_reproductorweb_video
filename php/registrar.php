<?php
include("conexion.php");

       
       if(isset($_POST['Siguiente'])){
           if (strlen($_POST['nombre'])>1 && strlen($_POST['mail'])> 1){
               $nombre = trim($_POST['nombre']);
               $correo = trim($_POST['mail']);
               $consulta = "INSERT INTO datos( NOMBRE, CORREO) VALUES ('$nombre', '$correo')";
               $resultado = mysqli_query($conexion, $consulta);
               if($resultado){
                   ?>
                   <script type="text/javascript">
                        
                        window.location.href="../html/eleccion.html";
                      
                        </script>;                  
                   
                   <?php
                 }else{
                    ?>
                     <script type="text/javascript">
                     
                        alert("Correo ya registrado");
                        // window.location.href="../index.html";
                        window.location.href="formulario.php";
                        </script>;
                    mysqli_close($conexion);
                    <?php
                 }

           }else{
            ?>
            <h3>error</h3>
            <?php
           }

       }

?>
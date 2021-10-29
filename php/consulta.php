<?php
include("conexion.php");

        if($conexion->connect_errno){
            echo "El sitio web presenta problemas";
        }
        $json=array();
				
		$conexion = mysqli_connect($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);

		$consulta="select * from datos  order by ID_USER desc";
		$resultado=mysqli_query($conexion,$consulta);
		
		while($registro=mysqli_fetch_array($resultado)){
            $ruta ='../videos/';
            $correo= $registro['CORREO'];
            $tipo= '.webm';
            $url= $ruta.$correo.$tipo;
			
            // echo ("<h1>$url</h1>");
            
            echo("<video class='colage'  
            style: padding='20px'
            audio ='false' 
            autoplay='autoplay'             
            loop= 'loop'  
            
            src = '$url' width='200' height='200' ></video>
            
            <script src = '../js/repTestimonio.js'></script>  
                 
            ");
            
		}
		 mysqli_close($conexion);
        

?>






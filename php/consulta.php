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
            $ruta= $registro['RUTA'];
			
            echo ("<h1>$ruta</h1>");
		}
		 mysqli_close($conexion);

?>
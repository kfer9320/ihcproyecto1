<?php
 include 'conexion.php';





function posicion_vida_equipo1(){
	$vida = rand(1, $cant_marcadores);
	$sql = "UPDATE nodos SET vida_1 = '1' WHERE id=".$vida;
	$resultado = $conn->query($sql);
}
function posicion_vida_equipo2(){
	$vida = rand(1, $cant_marcadores);
	$sql = "UPDATE nodos SET vida_1 = '1' WHERE id=".$vida;
	$resultado = $conn->query($sql);
}
function cambiar_estado($equipo,$pos,$estado,$imagen){

	$sql = "UPDATE nodos SET estado ='".$estado."',id_equipo ='".$equipo."' WHERE id=".$pos;
	$resultado = $conn->query($sql);
}
function cambiar_imagen($imagen,$id){
	$sql = "UPDATE nodos SET imagen = '".$imagen."' WHERE id=".$id;
	$resultado = $conn->query($sql);
}
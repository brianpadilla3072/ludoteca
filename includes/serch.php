<?php

$mysql = mysqli_connect(
    'localhost',
    'root',
    '',
    'LUDOTECA');
$search = $_POST['search'];
if(!empty($search)){//si el valor no esta vacio
    $query = "SELECT * FROM GAME_REVIEWS WHERE NAME LIKE '$search%' ";
    $resultado = mysqli_query($mysql,$query);
    if (!$resultado){//si la basede datos no tiene resultado
        die(" no se encontro resultados ". mysqli_error($mysql));
    }
    $json = array();// declaramos un array
    while($row = mysqli_fetch_array($resultado)){
        $json[] = array( // recorremos el array con los datos
            'ID'=> $row['ID'],
            'NAME' => $row['NAME'],
            'DESCRIPTION' => $row['DESCRIPTION'],
            'GAMBLERS' => $row['GAMBLERS'],
            'TIME' => $row['TIME']
        );
    }
    $jsonString = json_encode($json); // convierte en una variable de texto
    echo $jsonString;
}else{
    $query = "SELECT * FROM GAME_REVIEWS ";
    $resultado = mysqli_query($mysql,$query);
    $json = array();// declaramos un array
    while($row = mysqli_fetch_array($resultado)){
        $json[] = array( // recorremos el array con los datos
            'ID'=> $row['ID'],
            'NAME' => $row['NAME'],
            'DESCRIPTION' => $row['DESCRIPTION'],
            'GAMBLERS' => $row['GAMBLERS'],
            'TIME' => $row['TIME']
        );
    }
    $jsonString = json_encode($json); // convierte en una variable de texto
    echo $jsonString;
    

}
?>
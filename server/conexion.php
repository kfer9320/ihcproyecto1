<?php
$servername = "localhost";
$database = "ihc";
$username = "root";
$password = "";
$cant_marcadores = 9;
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

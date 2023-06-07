<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$database = "cadastro_formulario_portifolio";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Recupera os dados do formulário
$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$celular = $_POST['celular'];

// Insere os dados no banco de dados
$sql = "INSERT INTO tb_clientes(nome, cpf, celular) VALUES ('$nome', '$cpf', '$celular')";

if ($conn->query($sql) === TRUE) {
    echo 'Dados inseridos com sucesso!';
} else {
    echo 'Erro ao inserir os dados: ' . $conn->error;
}

// Fecha a conexão com o banco de dados
$conn->close();

?>

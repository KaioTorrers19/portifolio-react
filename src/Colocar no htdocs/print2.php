<?php
/* Change to the correct path if you copy this example! */
require __DIR__ . '/fontes/conexao.php';
require __DIR__ . '/vendor/autoload.php';
use Mike42\Escpos\Printer;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;

/**
 * Install the printer using USB printing support, and the "Generic / Text Only" driver,
 * then share it (you can use a firewall so that it can only be seen locally).
 *
 * Use a WindowsPrintConnector with the share name to print.
 *
 * Troubleshooting: Fire up a command prompt, and ensure that (if your printer is shared as
 * "Receipt Printer), the following commands work:
 *
 *  echo "Hello World" > testfile
 *  copy testfile "\\%COMPUTERNAME%\Receipt Printer"
 *  del testfile
 * 
 */

$tipo_cozinha = $_GET['tipo_cozinha'];
// $primeiro_nome = $_GET['primeiro_nome'];

if (empty($tipo_cozinha)) {
    echo '$var is either 0, empty, or not set at all';
}

// if (empty($primeiro_nome)) {
//     $primeiro_nome='';
// }

var_dump($tipo_cozinha);
// var_dump($primeiro_nome);
         
// $tipo_cozinha = "Minimalista";
// $primeiro_nome = "Oswaldo";

$a = 0;

$sql_insert = "INSERT INTO acesso(ativacao) VALUES (:ativacao)";

if($a==1)
{
    switch($tipo_cozinha){
        case "Moderna":        
        try {            
            // Enter the share name for your USB printer here
            $connector = null;
            $connector = new WindowsPrintConnector("TMT20X");
        
            /* Print a "Hello world" receipt" */
            $printer = new Printer($connector);
            $printer->text("-------------------------------------------------------- \n");
            $printer->text("Olá ".$primeiro_nome."!\n");
            $printer->text("\n");
            $printer->text("Seu código de desconto é #COZINHABRASTEMP \n");
            $printer->text("\n");
            $printer->text("Sua cozinha é Moderna\n");
            $printer->text("\n");
            $printer->text("Com os produtos BAP90AR (Coifa)\n");
            $printer->text("BFD5VCR(Forno)\n");
            $printer->text("BMG45AR (Microondas)\n");
            $printer->text("BLF10BR(LL)\n");
            $printer->text("\n");
            $printer->text("Utilize esse cupom na loja Fast Shop do Shopping Higienópolis na compra do refrigerador BRO85AK e ganhe 10% de desconto. Para completar a cozinha que mais combina com você, na compra dos outros produtos acima, ganhe 2% de desconto sobre o valor de cada produto. Quanto mais produtos você levar, maior o seu desconto!\n");
            $printer->text("\n");
            $printer->text("* Cupom válido de 28/10/2022 até 13/11/2022.\n");
            $printer->text("** Cupom válido apenas para compras realizadas na loja Fast Shop do Shopping Higienópolis.\n");
            $printer ->text("*** O desconto de 2% nos demais produtos só é válido na compra do BRO85AK.\n");
            $printer ->text("**** Desconto válido enquanto durarem os estoques dos produtos \n");
            $printer ->text("**** O Cupom é limitado a 1 (uma) compra por vez, sendo que o seu uso não poderá ser cumulado com outros cupons de desconto \n");
            $printer->text("\n");
            $printer->text("------------------------------------------------ \n");
            $printer->cut();
            
            /* Close printer */
            $printer->close();
        } catch (Exception $e) {
            echo "Couldn't print to this printer: " . $e->getMessage() . "\n";
        }        
    
        break;
    
        case "Minimalista":
            try {      
                
            // Enter the share name for your USB printer here
            $connector = null;
            $connector = new WindowsPrintConnector("TMT20X");
        
            /* Print a "Hello world" receipt" */
            $printer = new Printer($connector);
            $printer->text("-------------------------------------------------------- \n");
            $printer->text("Olá ".$primeiro_nome."!\n");
            $printer->text("\n");
            $printer->text("Seu código de desconto é #COZINHABRASTEMP \n");
            $printer->text("\n");
            $printer->text("Sua cozinha é Minimalista\n");
            $printer->text("\n");
            $printer->text("Com os produtos BAR90ARANA (Coifa)\n");
            $printer->text("BO260AR(Forno)\n");
            $printer->text("BDJ62AE(Cooktop)\n");
            $printer->text("BMO40 (Microondas)\n");
            $printer->text("BLF08BS (LL)\n");
            $printer->text("\n");
            $printer->text("Utilize esse cupom na loja Fast Shop do Shopping Higienópolis na compra do refrigerador BRO85AK e ganhe 10% de desconto. Para completar a cozinha que mais combina com você, na compra dos outros produtos acima, ganhe 2% de desconto sobre o valor de cada produto. Quanto mais produtos você levar, maior o seu desconto!\n");
            $printer->text("\n");
            $printer->text("* Cupom válido de 28/10/2022 até 13/11/2022.\n");
            $printer->text("** Cupom válido apenas para compras realizadas na loja Fast Shop do Shopping Higienópolis.\n");
            $printer ->text("*** O desconto de 2% nos demais produtos só é válido na compra do BRO85AK.\n");
            $printer ->text("**** Desconto válido enquanto durarem os estoques dos produtos \n");
            $printer ->text("**** O Cupom é limitado a 1 (uma) compra por vez, sendo que o seu uso não poderá ser cumulado com outros cupons de desconto \n");
            $printer->text("\n");
            $printer->text("------------------------------------------------ \n");
            $printer->cut();
            
            /* Close printer */
            $printer->close();
        } catch (Exception $e) {
            echo "Couldn't print to this printer: " . $e->getMessage() . "\n";
        }
        break;
    
        case "Clássica":
            try {
                
            // Enter the share name for your USB printer here
            $connector = null;
            $connector = new WindowsPrintConnector("TMT20X");
        
            /* Print a "Hello world" receipt" */
            $printer = new Printer($connector);
            $printer->text("-------------------------------------------------------- \n");
            $printer->text("Olá ".$primeiro_nome."!\n");
            $printer->text("\n");
            $printer->text("Seu código de desconto é #COZINHABRASTEMP \n");
            $printer->text("\n");
            $printer->text("Sua cozinha é Clássica\n");
            $printer->text("\n");
            $printer->text("Com os produtos BAP90AR (Coifa)\n");
            $printer->text("BOA84AR(Fogão)\n");
            $printer->text("BDK75DR(Cooktop)\n");
            $printer->text("BMG45AR (Microondas)\n");
            $printer->text("BMG45AR (Microondas)\n");
            $printer->text("\n");
            $printer->text("Utilize esse cupom na loja Fast Shop do Shopping Higienópolis na compra do refrigerador BRO85AK e ganhe 10% de desconto. Para completar a cozinha que mais combina com você, na compra dos outros produtos acima, ganhe 2% de desconto sobre o valor de cada produto. Quanto mais produtos você levar, maior o seu desconto!\n");
            $printer->text("\n");
            $printer->text("* Cupom válido de 28/10/2022 até 13/11/2022.\n");
            $printer->text("** Cupom válido apenas para compras realizadas na loja Fast Shop do Shopping Higienópolis.\n");
            $printer ->text("*** O desconto de 2% nos demais produtos só é válido na compra do BRO85AK.\n");
            $printer ->text("**** Desconto válido enquanto durarem os estoques dos produtos \n");
            $printer ->text("**** O Cupom é limitado a 1 (uma) compra por vez, sendo que o seu uso não poderá ser cumulado com outros cupons de desconto \n");
            $printer->text("\n");
            $printer->text("------------------------------------------------ \n");
            $printer->cut();
            
            /* Close printer */
            $printer->close();
        } catch (Exception $e) {
            echo "Couldn't print to this printer: " . $e->getMessage() . "\n";
        }        
    
        break;
    
    }



}


$statement = $pdo->prepare($sql_insert);
$statement->bindParam(':ativacao', $tipo_cozinha);
// Executa a senten�a j� com os valores
if ($statement->execute()) {
    // Definimos a mensagem de sucesso
    $cod_error = 0;
    $msg = "Cadastro Realizado com Sucesso!";
} else {
    $cod_error = 1;
    $msg = "erro no cadastro";
}
$Resultado['msg'] = $msg;
echo json_encode($Resultado);
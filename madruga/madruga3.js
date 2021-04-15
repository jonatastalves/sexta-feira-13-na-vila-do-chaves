personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - QUEBRA O PÉ DA CADEIRA E TENTA USAR COMO ESTACA PARA SE DEFENDER \n 2 - PULA A JANELA DE VOLTA E CORRE PARA O PÁTIO DOS FUNDOS");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>O GATO-VAMPIRO SE TRANSFORMA EM GATO NOVAMENTE PARA SE PROTEGER DO SOL E VAI ATRÁS DE VOCÊ, AO TE ENCURRALAR PERTO DO POÇO VOCÊ SÓ TEM 2 OPÇÕES!</p>
        <ul>
        <li>1 - FICA ATRÁS DO POÇO E TENTA ATRAÍ-LO!</li>
        <li>2 - POR ESTAR EM FORMA DE GATO, VOCÊ TENTA ATACA-LO</li>
        </ul>
        <a href="madruga4.html">ESCOLHER</a>
        </div>`);
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>Você consegue quebrar o pé da cadeira e usar como estaca, porém a cadeira é de plástico que simula madeira e não de madeira verdadeira</p>
        <p>CONSEGUE FERIR MAS NÃO MATAR, ENTÃO ELE TE ATACA E SUGA SEU SANGUE ATÉ A MORTE!</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

    }
}
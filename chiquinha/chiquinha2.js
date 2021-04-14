personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - verificar se é geléia de morango ou sangue \n 2 - sair entrando pra ver o que é enquanto grita KIKO");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>AO ENTRAR VOCÊ PERCEBE QUE O KIKO ESTA DESMAIADO NA SALA E A DONA FLORINDA SAI DA COZINHA DESESPERADAMENTE ENQUANTO SE TRANSFORMA NUMA FLORINDASOMEM PORQUE COMEU UM SANDUÍCHE DE PRESUNTO AMALDIÇOADO... O QUE VOCÊ FAZ ?</p>
        <ul>
        <li>1 - PEGA O SANDUÍCHE QUE CAIU DO CHÃO E MORDE UM PEDAÇO?</li>
        <li>2 - CORRE DESESPERADAMENTE COM O SANDUICHE PEDINDO AJUDA A ALGUÉM</li>
        </ul>
        <a href="chaves3.html">ESCOLHER</a>
        </div>`);
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>Você prova e vê que é geleia de morango</p>
        <p>MAS ELA ESTÁ ENVENENADA E VOCÊ MORRE</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

    }
}
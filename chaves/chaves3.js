personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - PEGA O SANDUÍCHE QUE CAIU DO CHÃO E MORDE UM PEDAÇO? \n 2 - CORRE DESESPERADAMENTE COM O SANDUICHE PEDINDO AJUDA A ALGUÉM");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>VOCÊ CORRE DESESPERADO PARA OS FUNDOS DA VILA E ENCONTRA O SR BARRIGA MORTO DENTRO DO POÇO E TODOS SUMIRAM, AO OLHAR PRA TRÁS VE A FLORINDASOMEM PRONTA PARA TE DEVORAR, O QUE VOCÊ FAZ?</p>
        <ul>
        <li>1 - JOGA O SANDUICHE NA BOCA DELA NA INTENÇÃO DE DESTRAIR E TENTAR FUGIR?</li>
        <li>2 - PEGA UM REVOLVER QUE PARECE TER UMA BALA DE PRATA DA MÃO DO SR BARRIGA E ATIRA NELA</li>
        </ul>
        <a href="chaves4.html">ESCOLHER</a>
        </div>`);
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>Você pega o sanduíche que caiu no chão e morde um pedaço</p>
        <p>Se transforma em um chavesomem e luta até morrer com a florindasomem e os 2 morrem...END GAME</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

    }
}
personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - TENTA ATACAR ELE COM O TACO DE BEISEBOL \n 2 - JOGA O TACO PARA DISTRAÍ-LO E PULA PELA JANELA");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>VOCÊ CONSEGUE ESCAPAR PARA O PÁTIO PRINCIPAL, E ENTRA NO BARRIL DO CHAVES, MAS O PALHAÇO TE ENCONTRA</p>
        <ul>
        <li>1 - VOCÊ ACHA UMA PASSAGEM SECRETA NO FUNDO DO BARRIL E TENTA ENTRAR POR ELA</li>
        <li>2 - VOCÊ JOGA UMA GARRAFA D'ÁGUA QUE ESTAVA NO BARRIL NO PALHAÇO</li>
        </ul>
        <a href="chiquinha4.html">ESCOLHER</a>
        </div>`);
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>O PALHAÇO É MAIS RÁPIDO E TE ATACA COM O PIRULITO FOICE</p>
        <p>ELE ACERTA SUA JUGULAR CAUSANDO SUA MORTE! GAME OVER</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

    }
}
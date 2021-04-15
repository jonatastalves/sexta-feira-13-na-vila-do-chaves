personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - Levanta correndo em direção a janela para ver o que está acontecendo \n 2 - se espreita na cama com um taco de beisebol pra ver no que vai dar");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>UM PALHAÇO ASSASSINO INVADE O QUARTO COM UM PIRULITO GIGANTE EM FORMA DE FOICE PARA TE ATACAR, O QUE VOCÊ FAZ?</p>
        <ul>
        <li>1 - TENTA ATACAR ELE COM O TACO DE BEISEBOL</li>
        <li>2 - JOGA O TACO PARA DISTRAÍ-LO E PULA PELA JANELA</li>
        </ul>
        <a href="chiquinha3.html">ESCOLHER</a>
        </div>`);
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>Ao levantar correndo você escorrega, bate com a cabeça na cômoda e cai no chão</p>
        <p>VOCÊ TEVE TRAUMATISMO CRANIANO E MORREU! GAME OVER!</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

    }
}
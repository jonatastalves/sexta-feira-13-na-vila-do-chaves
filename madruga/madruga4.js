personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - FICA ATRÁS DO POÇO E TENTA ATRAÍ-LO! \n 2 - POR ESTAR EM FORMA DE GATO, VOCÊ TENTA ATACA-LO");

    if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Você lembra de ter visto a dona Clotilde rezando a água do poço e percebe que virou água benta e tudo faz sentido pra você, que consegue atraí-lo, e ao cair no poço ele fica extremamente fraco e se afoga!</p>
        <p>Parabéns, você salvou a vila, ou pelo menos o que restou dela né 🤷‍♀️</p>

        <a href="../index.html">JOGAR DE NOVO</a>
        </div>`);
        break;
    }

    else if (escolha == 2){
        document.write(`<div class="texto">
        <p>AO ATACÁ-LO VOCÊ DESCOBRE QUE MESMO EM FORMA DE GATO ELE AINDA POSSUI A RAPIDEZ E FORÇA DE UM VAMPIRO</p>
        <p>e ele te quebra em pedaços... GAME OVER</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

}
}
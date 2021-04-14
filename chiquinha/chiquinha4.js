personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - JOGA O SANDUICHE NA BOCA DELA NA INTENÇÃO DE DESTRAIR E TENTAR FUGIR? \n 2 - PEGA UM REVOLVER QUE PARECE TER UMA BALA DE PRATA DA MÃO DO SR BARRIGA E ATIRA NELA");

    if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Ao jogar seu sanduíche de presunto na boca dela para distraí-la enquanto foge, ela come o sanduíche rapidamente e você percebe algo estranho acontecendo, ao olhar atentamente percebe a transformação revertendo pois ao comer novamente o sanduíche o efeito lobisomem é anulado, e a dona florinda volta ao normal!</p>
        <p>Parabéns, você salvou a vila, ou pelo menos o que restou dela né 🤷‍♀️</p>

        <a href="../index.html">JOGAR DE NOVO</a>
        </div>`);
        break;
    }

    else if (escolha == 2){
        document.write(`<div class="texto">
        <p>Ao pegar o revólver da mão do Sr. Barriga você atira</p>
        <p>O tiro abala a Florindasomem , mas não mata porque a bala é banhada a prata, e não de prata pura...você nao consegue fugir e é morto pela florindasomem... GAME OVER</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

}
}
personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - VOCÊ ACHA UMA PASSAGEM SECRETA NO FUNDO DO BARRIL E TENTA ENTRAR POR ELA \n 2 - VOCÊ JOGA UMA GARRAFA D'ÁGUA QUE ESTAVA NO BARRIL NO PALHAÇO");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>EM UM TIRO DE SORTE , AO JOGAR A ÁGUA VOCÊ DESCOBRE QUE O PALHAÇO É FEITO DE AÇUCAR E SE DISSOLVE , SALVANDO A SUA VIDA!</p>
        <p>Parabéns, você salvou a vila, ou pelo menos o que restou dela né 🤷‍♀️</p>

        <a href="../index.html">JOGAR DE NOVO</a>
        </div>`);
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>A PASSAGEM SECRETA ESTA TRANCADA POR DENTRO</p>
        <p>por não conseguir abrir, o palhaço consegue te atacar e te MATAR!... GAME OVER</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

}
}
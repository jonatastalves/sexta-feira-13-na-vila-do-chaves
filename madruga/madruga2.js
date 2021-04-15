personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1 - Entra chamando a dona clotilde para saber o que está acontecendo \n 2 - Dá a volta e entra pela janela que está aberta");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>AO ENTRAR PELA JANELA, VOCÊ DÁ DE CARA COM O GATO SATANÁS SE TRANSFORMANDO EM VAMPIRO E O MESMO VEM EM SUA DIREÇÃO, O QUE VOCÊ FAZ ?</p>
        <ul>
        <li>1 - QUEBRA O PÉ DA CADEIRA E TENTA USAR COMO ESTACA PARA SE DEFENDER</li>
        <li>2 - PULA A JANELA DE VOLTA E CORRE PARA O PÁTIO DOS FUNDOS</li>
        </ul>
        <a href="madruga3.html">ESCOLHER</a>
        </div>`);
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>VOCÊ ENTRA CHAMANDO A DONA CLOTILDE E ENCONTRA ELA MORTA NO SOFÁ, AO VASCULHAR O CORPO, SATANÁS, SEU GATO, SE TRANSFORMA EM VAMPIRO E PULA EM VOCÊ SUGANDO TODO SEU SANGUE</p>
        <p>GAME OVER MADRUGUINHA!</p>
        <a href="../index.html" class="escolha">REINICIAR</a>
        </div>`);
        break;
    }
    else{     
        alert ("OPS, ESCOLHE DIREITO O NÚMERO");   
    }

    }
}
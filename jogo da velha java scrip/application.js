cont = 0;
tabuleiro = [[],[],[]];
placarJ1 = 0;
placarJ2 = 0;
modoDeJogo = 0;
vencedor = false;

marcar = function(e){
    x = parseInt(e.id[2]);
    y = parseInt(e.id[4]);
    var jogador;
    if (modoDeJogo == 0){
        alert("Escolha um modo de jogo");
    }else if (modoDeJogo == 1){
        if (tabuleiro[x][y] != null){
		  return;
	   }	
	   if (cont%2 == 0){
		  e.innerHTML = "O";
		  jogador = "O";
	    }else{
		  e.innerHTML = "X";
		  jogador = "X";
	    }
	    tabuleiro[x][y] = jogador;
	    cont++;
        verificarVencedor();
    }else{
        e.innerHTML = "O";
        jogador = "O";
        tabuleiro[x][y] = jogador;
        cont++;
        verificarVencedor();
        if (!vencedor) { 
            parar = false;
            for (i = 0; i < 3; i++) {
                if (parar) break;
                for (j = 0; j < 3; j++) {
                    if (tabuleiro [i][j] == null) {
                        e = document.getElementById("c_"+i+"_"+j); 
                        e.innerHTML = 'X';
                        jogador = "X";
                        tabuleiro [i][j] = jogador;
                        cont++;
                        verificarVencedor();
                        parar = true;
                        break;
                    }
                }
            } 
        }     
    }
};

verificarVencedor = function(){
    for (i = 0; i < 3; i++) { 
        if (tabuleiro[i][0] == tabuleiro[i][1] && tabuleiro[i][0] == tabuleiro[i][2] && !vencedor) {
            if (tabuleiro[i][0] == 'X'){
                alert("jogador 2 ganhou na Linha");
                placarJ2++;
                vencedor = true;
            }   
            if (tabuleiro[i][0] == 'O'){
                alert("jogador 1 ganhou na Linha");
                placarJ1++;
                vencedor = true;
            }
        }
    }

    for (i = 0; i < 3; i++) { 
        if (tabuleiro[0][i] == tabuleiro[1][i] && tabuleiro[0][i] == tabuleiro[2][i] && !vencedor) {
            if (tabuleiro[0][i] == 'X'){
                alert("jogador 2 ganhou na Linha");
                placarJ2++;
                vencedor = true;
            }   
            if (tabuleiro[0][i] == 'O'){
                alert("jogador 1 ganhou na Linha");
                placarJ1++;
                vencedor = true;
            }
        }
    }
    if (tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[0][0] == tabuleiro[2][2] && !vencedor) {
       if (tabuleiro[0][0] == 'X'){
                alert("jogador 2 ganhou na Diagonal");
                placarJ2++
                vencedor = true;
            }   
            if (tabuleiro[0][0] == 'O'){
                alert("jogador 1 ganhou na Diagonal");
                placarJ1++;
                vencedor = true;
            }
    }
    
    if (tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[0][2] == tabuleiro[2][0] && !vencedor) { 
        if (tabuleiro[0][2] == 'X'){
            alert("jogador 2 ganhou na Diagonal");
            placarJ2++;
            vencedor = true;
        }   
        if (tabuleiro[0][2] == 'O'){
            alert("jogador 1 ganhou na Diagonal");
            placarJ1++;
            vencedor = true;
        }
    }
    if(cont == 9 && !vencedor){
        alert("Empate");
        return;
    }
    exibirPlacar();
};

limparTabuleiro = function(){  
    tabuleiro = [[],[],[]];
    cont = 0;
    vencedor = false;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            e = document.getElementById("c_"+i+"_"+j); 
            e.innerHTML = '';
        }
    }
};

exibirPlacar = function(){
    e = document.getElementById("j_1");
    e.innerHTML = placarJ1;
    e = document.getElementById("j_2");
    e.innerHTML = placarJ2;
};


verificarModoDeJogo = function(e) {
    tipo = parseInt(e.id);
    console.log(tipo);
    if (tipo == 1) {
        modoDeJogo = 1 ;
        alert("Versus");
    } else if (tipo == 2) {
        modoDeJogo = 2;
        alert("Arcade");
    }
    placarJ2 = 0;
    placarJ1 = 0;
    limparTabuleiro();
    exibirPlacar();
};

resetJogo = function(){
    limparTabuleiro();
    placarJ1 = 0;
    placarJ2 = 0;
    exibirPlacar();
}



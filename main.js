const numerosenha = document.querySelector("parametro-senha_texto");
let tamanhosenha = 12;
numerosenha.textContent = tamanhosenha;

const botoes = document.querySelectorAll("parametro-senha_botao");

botoes{0}.onclick = diminuitamanho;
botoes{1}.onclick = aumentatamanho;

function diminuitamanho(){ 
    if (tamanhosenha > 1){
        //tamanhosenha = tamanhosenha - 1
        tamanhosenha--;
    }
    numerosenha.textContent = tamanhosenha;
    gerasenha();
}
function aumentatamanho(){ 
    if (tamanhosenha > 20){
        //tamanhosenha = tamanhosenha - 1
        tamanhosenha++;
    }
    numerosenha.textContent = tamanhosenha;
    gerasenha();
}

const camposenha = document.querySelector("#campo-senha");

const letramaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXWZ";
gerasenha();

function gerasenha(){
    let senha = '';
    for(let i = 0; i <tamanhosenha; i++){
        let numeroaleatorio = Math.random()* letramaiusculas.length;
        numeroaleatorio = Math.floor(numeroaleatorio);
        senha = senha + letramaiusculas[numeroaleatorio];
    }
    camposenha.value = senha;
        
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
const letraminusculas = "abcdefghijklmnopqrstuvxwz";
const numero = "0123456789"
const simbolos = "!@%*?";

gerasenha();

function gerasenha(){
    let alfabeto ='';
    if (checkbox[0].checked){ 
        alfabeto = alfabeto + letramaiusculas;
    }
    if (checkbox[0].checked){ 
        alfabeto = alfabeto + letraminusculas;
    }
    if (checkbox[0].checked){ 
        alfabeto = alfabeto + numero;
    }
    if (checkbox[0].checked){ 
        alfabeto = alfabeto + simbolos;
    }
    
    let senha = '';
    for(let i = 0; i <tamanhosenha; i++){
        let numeroaleatorio = Math.random()* letramaiusculas.length;
        numeroaleatorio = Math.floor(numeroaleatorio);
        senha = senha + alfabeto[numeroaleatorio];
    }
    camposenha.value = senha;

        
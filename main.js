const numerosenha = document.querySelector(".parametro-senha_texto");
let tamanhosenha = 12;
numerosenha.textContent = tamanhosenha;
const letramaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXWZ";
const letraminusculas = "abcdefghijklmnopqrstuvxwz";
const numero = "0123456789"
const simbolos = "!@%*?";

const botoes = document.querySelectorAll(".parametro-senha_botao");
const camposenha = document.querySelector("#campo-senha");
const checkbox = document.querySelectorAll('.checkbox');
const forçasenha = document.querySelectorAll('.força');

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

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


for (i = 0; i < checkbox.length; i+++){
    checkbox[i].onclick = gerasenha;
}


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
        let numeroaleatorio = Math.random()* alfabeto.length;
        numeroaleatorio = Math.floor(numeroaleatorio);
        senha = senha + alfabeto[numeroaleatorio];
    }
    camposenha.value = senha;
    classificasenha();

function classificasenha(){
  forçasenha.classlist.remove ("fraca', 'media', 'forte'); 
    if (tamanhosenha > 11)(
        forçasenha.classlist.add('forte');
    } else if (tamanhosenha > 5 && tamanhosenha < 12)(
        força senha.classlist.add('media');
    }else if (tamanhosenha <= 5){
        forçasenha.classlist.add('fraca');
    }

}


        
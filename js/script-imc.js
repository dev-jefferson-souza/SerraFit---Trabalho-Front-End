

let botao = document.getElementById('botao-resultado');
botao.addEventListener('click', calcularImc);


function calcularImc(){
    let altura = document.getElementById('altura-digitada');
    let peso = document.getElementById('peso-digitado');


    if(altura.value > 0 && peso.value > 0 ){
        //IMC Resultado
        let imc = (peso.value) / (altura.value) **2;
        let resultadoImc = document.getElementById('res-imc');
        let resultadoSituacao = document.getElementById('res-sit');
        resultadoImc.innerHTML = `IMC: ${imc.toFixed(1)}`;
        let mostra = document.getElementById('res-sit');
        mostra.classList.toggle('ativar');

       //Mensagem Resultado
       let mensagem = 
       imc < 18.5 ? "Abaixo do Normal"
       : imc < 25 ? "Peso Normal"
       : imc < 30 ? "Sobrepeso"
       : imc < 40 ? "Obesidade"
       : "Obesidade Grave";
        resultadoSituacao.innerHTML = mensagem;
    }
    else {
        alert("Por favor, digite um valor válido!");
    }
}


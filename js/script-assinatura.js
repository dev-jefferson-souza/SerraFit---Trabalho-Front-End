var mostraTotal =document.getElementById('botao-total');
var a = document.getElementById('total-assinatura');

mostraTotal.addEventListener('click', calculaTotal);

function calculaTotal() {
    var total = 0;
    var chkS1 = document.getElementById('boxe');
    var chkS2 = document.getElementById('natacao');
    var chkS3 = document.getElementById('pilates');
    var chkS4 = document.getElementById('ginastica');
    var chkS5 = document.getElementById('danca');
    var plano = document.getElementById('plano');

    chkS1.checked ? total += 40.00 : total += 0;
    chkS2.checked ? total += 40.00 : total += 0;
    chkS3.checked ? total += 20.00 : total += 0;
    chkS4.checked ? total += 20.00 : total += 0;
    chkS5.checked ? total += 30.00 : total += 0;
    plano.value == "S" ? total += 55.00 : total += 75.00;
             
    a.innerHTML = `Valor da mensalidade - R$${total.toFixed(2)}`   
}

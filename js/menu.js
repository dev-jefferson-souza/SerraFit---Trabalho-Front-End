var menu = document.getElementById('botao-menu');

menu.addEventListener('click', toggleMenu);

function toggleMenu(){    
    var navegacao = document.getElementById('barra-nav');
    navegacao.classList.toggle('ativar');
    
}

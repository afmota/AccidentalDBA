document.addEventListener('DOMContentLoaded', function() {
    var root = document.documentElement;
    var body = document.body;

    function atualizarTema() {
      var horaAtual = new Date().getHours();

      switch(horaAtual) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            root.style.setProperty('--cor0', '#dadada');
            root.style.setProperty('--cor1', '#7e7e7e');
            root.style.setProperty('--cor2', '#494949');
            root.style.setProperty('--cor3', '#302f2f');
            root.style.setProperty('--cor4', '#202020');
            root.style.setProperty('--cor5', '#000000');
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            root.style.setProperty('--cor0', '#000000');
            root.style.setProperty('--cor1', '#e69e0a');
            root.style.setProperty('--cor2', '#d18c07');
            root.style.setProperty('--cor3', '#bc7b03');
            root.style.setProperty('--cor4', '#a76900');
            root.style.setProperty('--cor5', '#633f00');
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            root.style.setProperty('--cor0', '#fcebeb');
            root.style.setProperty('--cor1', '#ffa8a8');
            root.style.setProperty('--cor2', '#ff6262');
            root.style.setProperty('--cor3', '#ff0000');
            root.style.setProperty('--cor4', '#8a0000');
            root.style.setProperty('--cor5', '#330000');
            break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            root.style.setProperty('--cor0', '#eeeeee');
            root.style.setProperty('--cor1', '#407dff');
            root.style.setProperty('--cor2', '#0051ff');
            root.style.setProperty('--cor3', '#003ab6');
            root.style.setProperty('--cor4', '#002679');
            root.style.setProperty('--cor5', '#000e2c');
            break;
      }
    }

    atualizarTema(); // Atualizar tema ao carregar a página

    // Atualizar tema a cada minuto
    setInterval(atualizarTema, 60000);
})

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

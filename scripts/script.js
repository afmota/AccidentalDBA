document.addEventListener('DOMContentLoaded', function() {
    var root = document.documentElement;
    var body = document.body;

    function atualizarTema() {
      var horaAtual = 21//new Date().getHours();
      var modoNoturno = horaAtual >= 18 || horaAtual < 6;

      if (modoNoturno) {
        root.style.setProperty('--cor0', '#00a6fb')
        root.style.setProperty('--cor1', '#0582ca');
        root.style.setProperty('--cor2', '#006494');
        root.style.setProperty('--cor3', '#003554');
        root.style.setProperty('--cor4', '#051923');
        root.style.setProperty('--cor5', '#000000');
      } else {
        root.style.setProperty('--cor0', '#fcebeb')
        root.style.setProperty('--cor1', '#ffa8a8');
        root.style.setProperty('--cor2', '#ff6262');
        root.style.setProperty('--cor3', '#ff0000');
        root.style.setProperty('--cor4', '#8a0000');
        root.style.setProperty('--cor5', '#330000');
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

var eventos = [];
var eventoForm = document.getElementById('eventoForm');
var assuntoInput = document.getElementById('assunto');
var localInput = document.getElementById('local');
var imagemInput = document.getElementById('imagem');
var anunciosContainer = document.getElementById('anuncios');

// Eventos
eventoForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  var assunto = assuntoInput.value;
  var local = localInput.value;
  var imagem = imagemInput.files[0];

  var evento = {
    assunto: assunto,
    local: local,
    imagem: URL.createObjectURL(imagem)
  };

  eventos.push(evento);

  assuntoInput.value = '';
  localInput.value = '';
  imagemInput.value = '';

  exibirEventos();
});

// Funções
function exibirEventos() {
  anunciosContainer.innerHTML = '';

  for (var i = 0; i < eventos.length; i++) {
    var evento = eventos[i];

    var card = document.createElement('div');
    card.classList.add('card');

    var assuntoElement = document.createElement('h2');
    assuntoElement.innerText = evento.assunto;

    var localElement = document.createElement('p');
    localElement.innerText = 'Local: ' + evento.local;

    var imagemElement = document.createElement('img');
    imagemElement.src = evento.imagem;

    var editarButton = document.createElement('button');
    editarButton.innerText = 'Editar';
    editarButton.dataset.index = i;
    editarButton.addEventListener('click', function(event) {
      var index = event.target.dataset.index;
      editarEvento(index);
    });

    card.appendChild(assuntoElement);
    card.appendChild(localElement);
    card.appendChild(imagemElement);
    card.appendChild(editarButton);

    anunciosContainer.appendChild(card);
  }
}

function editarEvento(index) {
  var evento = eventos[index];

  assuntoInput.value = evento.assunto;
  localInput.value = evento.local;

  eventos.splice(index, 1);

  exibirEventos();
}

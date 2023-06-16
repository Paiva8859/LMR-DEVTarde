//-----==Dados==-----//
//PaginaConta
const paginaConta = document.querySelector(".paginaConta");
const aConta = document.getElementById("aConta")
//Formulário Todo
const facaLogin = document.querySelector(".facaLogin");
const log = document.querySelector(".log");
const cad = document.querySelector(".cad");
const logBtt = document.querySelector(".logBtt");
const cadBtt = document.querySelector(".cadBtt");
const form = document.querySelector(".form");
const facaCadastro = document.querySelector(".facaCadastro");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
//Enviar formulário (Submit)
const logar = document.querySelector(".logar");
//Aviso de verificação de campos
const avisoE = document.querySelector(".avisoE");
avisoE.style.display = "none";
const avisoS = document.querySelector(".avisoS");
avisoS.style.display = "none";
//Campos
const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
//Array que guarda Usuários
var formulario = [{
  user: 'adm@adm',
  password: 'admin'
}];
//Usuário atualmente logado
//Declarando a variável para que ela possa ser chamada por outros arquivos
window.usuarioAtual = false;

//-----==Events==-----//
//form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var usuario = document.getElementById("user").value;
  var senha = document.getElementById("password").value;
  var vcu = verifyCampoUser();
  var vcp = verifyCampoPassword();

  if (vcu && vcp) {
    var dadosFormulario = {
      user: usuario,
      password: senha
    };
    formulario.push(dadosFormulario);
    usuarioAtual = dadosFormulario;

    // Seleciona a div de resultado pelo ID
    var divLogado = document.getElementById("logado");

    // Cria um elemento de parágrafo para exibir os dados
    var paragrafo = document.createElement("p");

    // Define o conteúdo do parágrafo com os dados do formulário
    paragrafo.textContent = "Usuário: " + usuario;

    // Adiciona o parágrafo à div de resultado
    divLogado.appendChild(paragrafo);

    var mensagem = "Você fez login com o usuário: " + usuario;

    // Cria um elemento de div para exibir a mensagem
    var divAlert = document.createElement("div");
    divAlert.className = "alert";
    divAlert.textContent = mensagem;

    // Adiciona a div de mensagem ao corpo do documento
    document.body.appendChild(divAlert);

    // Define um tempo limite para remover a div de mensagem após 2 segundos
    setTimeout(function () {
      divAlert.parentNode.removeChild(divAlert);
    }, 2000);

    form.style.display = "none";
    paginaConta.style.display = "block";
    aConta.style.display = "none";
    divLogado.style.display = "block";

    //gerando insignias
    var numerosPossiveis = [1, 2, 3, 4];
    var indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);
    var numeroDeInsignias = numerosPossiveis[indiceAleatorio];
    var insignias = [];
    for (var i = 0; i < numeroDeInsignias;) {
      var genInsignias = Math.floor(Math.random() * numerosPossiveis.length) + 1;
      if (!insignias.includes(genInsignias)) {
        insignias.push(genInsignias);
        i++;
      }
    }

    if (insignias.includes(1)) {
      card1.style.display = "block";
    }
    if(insignias.includes(2)) {
      card2.style.display = "block";
    }
    if(insignias.includes(3)) {
      card3.style.display = "block";
    }
    if(insignias.includes(4)) {
      card4.style.display = "block";
    }
  }
});

facaLogin.addEventListener("click", abreLogin);
facaCadastro.addEventListener("click", abreCadastro);

//FUNCOES
function verifyCampoUser() {
  var usuario = document.getElementById("user").value;

  if (usuario.length <= 2) {
    avisoE.style.display = "block";
    return false;
  }
  else if (!usuario.includes("@")) {
    avisoE.style.display = "block";
    return false;
  }
  else {
    avisoE.style.display = "none";
  }

  return true;
}
function verifyCampoPassword() {
  var senha = document.getElementById("password").value;

  if (senha.length <= 5) {
    avisoS.style.display = "block";
    return false;
  }
  else {
    avisoS.style.display = "none";
  }

  return true;
}

function abreLogin() {
  cad.style.display = "none";
  log.style.display = "block";
  cadBtt.style.display = "none";
  logBtt.style.display = "block";
  avisoE.style.display = "none";
  avisoS.style.display = "none";
}
function abreCadastro() {
  cad.style.display = "block";
  log.style.display = "none";
  cadBtt.style.display = "block";
  logBtt.style.display = "none";
  avisoE.style.display = "none";
  avisoS.style.display = "none";
}
//-----==Dados==-----//
//Formulário Todo
const facaLogin = document.querySelector(".facaLogin");
const log = document.querySelector(".log");
const cad = document.querySelector(".cad");
const logBtt = document.querySelector(".logBtt");
const cadBtt = document.querySelector(".cadBtt");
const form = document.querySelector(".form");
const facaCadastro = document.querySelector(".facaCadastro");
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
    alert("Você fez login com o usuário: "+ usuario);
  }
})

facaLogin.addEventListener("click", abreLogin);
facaCadastro.addEventListener("click", abreCadastro);

//FUNCOES
function verifyCampoUser(){
  var usuario = document.getElementById("user").value;

  if (usuario.length <= 2) {
    avisoE.style.display = "block";
    return false;
  }
  else if(!usuario.includes("@")){
    avisoE.style.display = "block";
    return false;
  }
  else{
    avisoE.style.display = "none";
  }

  return true;
}
function verifyCampoPassword(){
  var senha = document.getElementById("password").value;

  if (senha.length <= 5) {
    avisoS.style.display = "block";
    return false;
  }
  else{
    avisoS.style.display = "none";
  }

  return true;
}

function abreLogin(){
  cad.style.display="none";
  log.style.display="block";
  cadBtt.style.display="none";
  logBtt.style.display="block";
  avisoE.style.display="none";
  avisoS.style.display="none";
}
function abreCadastro(){
  cad.style.display="block";
  log.style.display="none";
  cadBtt.style.display="block";
  logBtt.style.display="none";
  avisoE.style.display="none";
  avisoS.style.display="none";
}
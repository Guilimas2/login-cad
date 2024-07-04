// validaçao para validaçao de acessar 
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos!");
    } else {
        // alert("Campos preenchidos com sucesso!");
        window.location.href = "cadastro.html";
    }
}
// FUNÇAO PARA ARMAZENAMENTO DE NOMES EM ARRAY
var dadosLista = [];
function salvarUser(){

}
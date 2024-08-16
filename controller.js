// FUNÇÃO PARA VALIDAÇÃO DE ACESSO

//  A FUNÇAO ACESSAR E PARA VALIDAR OS CAMPOS LOGIN
function acessar(){
    // OBTER O VALOR INSERIDO PELO USUARIO NOS CAMPOS DE EAMIL E SENHA
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
//  PARA VER SE TEM ALGUM CAMPO PREENCHIDO 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
// SE TIVER UM CAMPO VAZIO IRA APARECER UMA MENSAGEM DE ALERTA SOLICITANDO PARA PREENCHER TODOS OS CAMPOS 
    }else{
        //alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}
 
// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
var dadosLista = [];
var email = [];
//  CRIAR UM ARRAY VAZIO PARA ARMAZENAR OS NOMES  DOS USUARIO
function salvarUser(){
    // O 'salvarUser' RESPONSALVEL POR ADICIONAR UM NOVO NOME AO ARRAY 
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;
    if(nomeUser){
        dadosLista.push(nomeUser);
        //console.log(dadosLista);
        email.push(emailUser);
        criaLista();
        // LIMPA O CAMPOS DE ENTRADA DE NOME APOS O SALVAMENTO 
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    }else{
        alert("Favor informe um nome para cadastro");
        // SEO CAMPO DE NOME ESTIVER VAZIO, IRA APARECER UMA MENSAGEM DE ALERTA PARA PREENCHER O NOME SEJA INFORMADO 
    }
}
// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criaLista(){
    // INICIAR A TABELA COM O CABEÇALHO 
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    // O ARRAY "dadosLista" PARA ADICIONAR CADA NOME A TABELA
    for(let i=0;i<=(dadosLista.length - 1);i++){
        // ADICIONA UMA NOVA LINHA PARA CADA NOME NA TABELA
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + email[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        // ATUALIZA O CONTEUDO DA TABELA NO HTML COM O CODIGO DA TABELA GERADO
        document.getElementById('tabela').innerHTML = tabela;
        // FUÇAO PARA EDITAR NOMES DE LISTA 
    }
}
 
// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i){
// PREENCHER O CAMPO DE ENTRADA COM O NOME A SER EDITADO 
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById('emailUser').value = email[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    email.splice((i - 1), 1);
    // REMOVE O NOME DA LISTA PARA QUE POSSA SER ATUALIZADO 

}
 
// FUNÇÃO PARA EXCLUIR NOME DE LISTA
function excluir(i){
    // REMOVE  O NOME DA LISTA PELO INDICE FORNECIDO
    dadosLista.splice((i - 1), 1);
    email.splice((i - 1), 1);
    // ATUALIZA A TABELA APOS A REMOÇAO
    document.getElementById('tabela').deleteRow(i);
    document.getElementById('nomeUser').value= "";
}
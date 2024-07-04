// validaçao para validaçao de acessar 
 function acessar(){
    let loginEmail = document.getElementById ('loginEmail').value; 
    let loginsenha =  document.getElementById ('loginSenha'). value; 

    if(!loginEmail || !loginsenha){
        alert("Por favor preencher todos os campos");
    }else{
        // alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}
let situacao = confirm("Para acessar o sistema - pressione Ok");

if(situacao) {
    // redirecionar o usuário para a página de acesso permitido
    window.location.href = "acessoPermitido.html";
} else{
    window.location.href = "acessoNegado.html";
}
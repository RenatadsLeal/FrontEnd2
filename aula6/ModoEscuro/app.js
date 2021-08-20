
function myFunction(){
    let body = document.body
    body.classList.toggle("dark-mode")
    let li = document.querySelectorAll("li")
    li.forEach((lix)=>{lix.classList.toggle("dark-mode-li")})
    let button = document.querySelector('button')
    button.classList.toggle("darkbutton")
    buttontext = document.querySelector('button')
    if (buttontext.innerText == "Modo escuro")
    buttontext.innerText = "Modo Claro";
    else
    buttontext.innerText = "Modo escuro";
}
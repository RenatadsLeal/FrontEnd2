let body = document.body
let form = document.createElement("form")
form.setAttribute("method","post")
form.setAttribute("action","#")
body.appendChild(form)

let inputEmail =  document.createElement("input")
inputEmail.setAttribute("type", "email")
inputEmail.setAttribute("placeholder", "Email")
inputEmail.style.margin = "0.5rem"
form.appendChild(inputEmail)

let inputPasswrod = document.createElement("input")
inputPasswrod.setAttribute("type","password")
inputPasswrod.setAttribute("placeholder", "Senha")
inputPasswrod.style.margin = "0.5rem"
form.appendChild(inputPasswrod)

let btnSubmit = document.createElement("button")
btnSubmit.setAttribute("type","submit")
btnSubmit.textContent = "Enviar"
btnSubmit.style.margin = "0.5rem"
form.appendChild(btnSubmit)

let btnReset = document.createElement("button")
btnReset.setAttribute("type", "reset")
btnReset.textContent = "Cancelar"
form.appendChild(btnReset)

inputEmail.setAttribute("disabled","disabled")

form.style.display = "flex"
form.style.flexDirection = "column"
form.style.alignItems = "center"
form.style.margin = "15rem"

inputEmail.removeAttribute("placeholder")
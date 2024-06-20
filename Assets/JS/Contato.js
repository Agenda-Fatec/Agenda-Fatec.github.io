const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
    
})

//ao clicar fora se tiver preenchido, sai o foco(blur), sai o vermelho
username.addEventListener("blur", () => {
    checkInputUsername();
})
email.addEventListener("blur", () => {
    checkInputEmail();
})
assunto.addEventListener("blur", () => {
    checkInputAssunto();
})


//função chegar input do username
function checkInputUsername() {
    //pega o valor digitado la em cima e atribui na var usernamevalue
    const usernameValue = username.value;
//checa se está vazio
    if(usernameValue === "") {
        //mostrar o aviso e mostrar o erro
        errorInput(username, "Nome obrigatório.")
    } else { //se preenchido, elemento pai do div joga no formItem
        const formItem = username.parentElement;
        //joga form-content no formItem
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === "") {
        //mostrar o aviso e mostrar o erro
        errorInput(email, "E-mail é obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputAssunto() {
    const assuntoValue = assunto.value;

    if(assuntoValue === "") {
        //mostrar o aviso e mostrar o erro
        errorInput(assunto, "Assunto é obrigatório.")
    } else if(assuntoValue.length < 3) {
        errorInput(assunto, "Digite ao menos uma frase.")
    } 
    else {
        const formItem = assunto.parentElement;
        formItem.className = "form-content"
    }
}


//função de checagem geral do form, chama todas as funções...
function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputAssunto();

    //pega todos os campos do form e atribui ao formItem
    const formItem = form.querySelectorAll(".form-content")

    //validado faz um array com every campos item return na classe tudo se for form-content
    const isValid = [...formItem].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid) {
        alert("Enviado com sucesso")
    }
}


//função de erro no input e mensagem de erro
function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}
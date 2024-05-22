var nome, email, senha = "";

var vezes_login = 0;

function Change_Form(formulario)
{

    switch(formulario)
    {

        case "cadastro":

            document.getElementById("login").style.transform = "translateX(100%)";

            setTimeout(() => { document.getElementById("cadastro").style.transform = "translateX(0%)"; }, 750);

        break;

        default:

            document.getElementById("cadastro").style.transform = "translateX(-100%)";

            setTimeout(() => { document.getElementById("login").style.transform = "translateX(0%)"; }, 750);

        break;

    }

}

document.getElementById("form_cadastro").addEventListener("submit", event => {

    nome = document.getElementById("nome_cadastro").value;

    email = document.getElementById("email_cadastro").value;

    senha = document.getElementById("senha_cadastro").value;

    event.preventDefault();

    document.getElementById("form_cadastro").reset();

    Change_Form("login");

})

document.getElementById("form_login").addEventListener("submit", event => {

    if(vezes_login >= 3)
    {

        alert("Número máximo de tentativas atingido!");

        event.preventDefault();

        document.getElementById("form_login").reset();

    }

    else if(document.getElementById("email_login").value != email || document.getElementById("senha_login").value != senha)
    {

        alert("Dados incorretos! Tente novamente.");

        vezes_login++;

        event.preventDefault();

    }

    else
    {

        return true;

    }

})
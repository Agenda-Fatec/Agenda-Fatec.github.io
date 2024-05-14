function Menu_Options()
{

    document.getElementById("menu").style.transform = "translateY(0%)";

}

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
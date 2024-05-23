function Control_Menu(estado)
{

    if(!estado)
    {

        document.getElementById("menu").style.transform = "translateY(100%)";

    }

    else
    {

        document.getElementById("menu").style.transform = "translateY(0%)";

    }

}
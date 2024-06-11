var dados = [];

window.onload = () => {

    const url_get = new URLSearchParams(window.location.search);

    const usuario = url_get.get("ra_login");

    const senha = url_get.get("senha_login")

    dados.push(usuario, senha);

    if(dados[0] != null && dados[1] != null)
    {

        document.querySelector(".without_access").style.display = "none";

        document.querySelector(".with_access").style.display = "flex";

    }

}
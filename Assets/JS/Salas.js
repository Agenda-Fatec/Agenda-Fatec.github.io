const salas = [

    {nome: "Laboratório 04", bloco: "Bloco 02", numero: "216", descricao: "Sala onde ocorrem as aulas de Modelagem de Banco de Dados e Engenharia de Software 01."},
    {nome: "Laboratório 09", bloco: "N.I.C.", numero: "005", descricao: "Sala onde ocorrem as aulas de Design Digital."},
    {nome: "Laboratório 02", bloco: "Bloco 01", numero: "114", descricao: "Sala onde ocorrem as aulas de Sistemas Operacionais e Redes de Computadores."},
    {nome: "Laboratório 06", bloco: "Bloco 02", numero: "212", descricao: "Sala onde ocorrem as aulas de Desenvolvimento Web 01 e Algoritmos e Lógica de Programação."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."},
    {nome: "Sala", bloco: "Desconhecido", numero: "000", descricao: "Lorem ipsum dolor sit amet. Et minima consequatur hic quia provident At voluptatibus quas non aliquam velit."}

];

const listagem_salas = document.getElementById("salas");

function Insert_Room(sala)
{

    var elemento_sala = "";

    elemento_sala += "<a target='_blank' href='./Agendamento.html'> ";

    elemento_sala += "<h3 class='nome_sala'> " + sala.nome + " </h3> ";

    elemento_sala += "<h3 class='numero_sala'> " + sala.numero + " </h3> ";

    elemento_sala += "<p> " + sala.descricao + " </p> ";

    elemento_sala += "</a>";

    listagem_salas.innerHTML += elemento_sala;

}

function Load_Rooms()
{

    listagem_salas.innerHTML = "";

    for(var i = 0; i < salas.length; i++)
    {

        Insert_Room(salas[i]);

    }

}

window.onload = Load_Rooms();
const equipamentos = [

    { nome: "Televisão", quantidade: 1 },
    { nome: "Computador", quantidade: 30 },
    { nome: "Monitor", quantidade: 30 },
    { nome: "Mouse", quantidade: 30 },
    { nome: "Cabo de Rede", quantidade: 30 },
    { nome: "Estabilizador", quantidade: 10 },
    { nome: "Mesa", quantidade: 1 },
    { nome: "Lousa", quantidade: 1 },
    { nome: "Ar condicionado", quantidade: 1 }

];

const listagem_equipamentos = document.getElementById("equipamentos");

function Insert_Equipments(equipamento)
{

    var elemento_equipamento = "";

    elemento_equipamento += "<span> ";

    elemento_equipamento += "<p> " + equipamento.nome + " </p> ";

    elemento_equipamento += "<p> " + equipamento.quantidade + " </p> ";

    elemento_equipamento += "</span>";

    listagem_equipamentos.innerHTML += elemento_equipamento;

}

function Load_Equipments()
{

    listagem_equipamentos.innerHTML = "";

    for(var i = 0; i < equipamentos.length; i++)
    {

        Insert_Equipments(equipamentos[i]);

    }

}

function Convert_Month(mes)
{

    const mes_formatado = {

        "Jan" : "01",
        "Feb" : "02",
        "Mar" : "03",
        "Apr" : "04",
        "May" : "05",
        "Jun" : "06",
        "Jul" : "07",
        "Ago" : "08",
        "Sep" : "09",
        "Oct" : "10",
        "Nov" : "11",
        "Dec" : "12"

    };

    return mes_formatado[mes];

}

window.onload = () => {

    // Obtendo os dados do horário atual (Data, hora, etc).

    const dados = new Date(Date.now()).toString().split(" ");

    document.getElementById("data_agendamento").value = dados[3] + "-" + Convert_Month(dados[1]) + "-" + dados[2];

    document.getElementById("horario_inicial_agendamento").value = dados[4];

    document.getElementById("horario_final_agendamento").value = dados[4];

    Load_Equipments();

};
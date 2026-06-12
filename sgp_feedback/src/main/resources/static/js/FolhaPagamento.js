const API_SALVAR = "http://localhost:8014/pagamento/salvar";

async function salvarFolha(){

    const folha = {

        salarioBase:
            document.getElementById("salarioBase").value,

        bonus:
            document.getElementById("bonus").value,

        horaExtra:
            document.getElementById("horasExtras").value,

        valorHoraExtra:
            document.getElementById("valorHora").value,

        desconto:
            document.getElementById("descontos").value,

        inss:
            document.getElementById("inss").value,

        fgts:
            document.getElementById("fgts").value,

        competencia:
            document.getElementById("competencia").value,

        status: "ABERTA"
    };

    try{

        const response = await fetch(
            url + "/salvar",
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(folha)
            }
        );

        if(response.ok){

            const dados = await response.json();

            alert("Folha criada com sucesso!");

            console.log(dados);

            window.location.href = "folhaPagamento.html";

        }else{

            alert("Erro ao salvar a folha.");

        }

    }catch(error){

        console.error(error);

        alert("Erro ao conectar com o servidor.");

    }
}


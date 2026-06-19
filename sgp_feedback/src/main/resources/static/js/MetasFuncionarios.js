const API_LISTAR_FUNCIONARIOS ="http://192.168.56.1:8014/funcionarios/listartodos";
const API_SALVAR_META = "http://192.168.56.1:8014/meta/salvar";

//LISTAR FUNCIONARIOS
async function carregarFuncionarios() {

    try {

        const response = await fetch(API_LISTAR_FUNCIONARIOS);

        if (!response.ok) {
            throw new Error("Erro ao buscar funcionários");
        }

        const funcionarios = await response.json();

        const select = document.getElementById("funcionario");

        // 🔥 IMPORTANTE: limpa antes de preencher
        select.innerHTML = `
            <option value="">
                Selecione o funcionário...
            </option>
        `;

        funcionarios.forEach(funcionario => {

            const option = document.createElement("option");

            option.value = funcionario.id;
            option.textContent = funcionario.nome;

            select.appendChild(option);
        });

    } catch (error) {
        console.error(error);
    }
}

window.onload = carregarFuncionarios;


//SALVAR NO BACK
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", salvarMeta);
});

async function salvarMeta(event) {

    event.preventDefault();

    const funcionario = document.getElementById("funcionario").value;

    if (funcionario === "") {
        alert("Selecione um funcionário.");
        return;
    }

    const tipo = document.querySelector("input[name='tipo']:checked");

    if (tipo == null) {
        alert("Selecione o tipo da meta.");
        return;
    }

    const status = document.querySelector("input[name='status']:checked");

    if (status == null) {
        alert("Selecione o status da meta.");
        return;
    }

    const meta = {

        descricao: document.getElementById("descricao").value,

        dataInicio: document.getElementById("inicio").value,

        dataPrazo: document.getElementById("fim").value,

        status: status.value,

        resultadoObtido: parseFloat(
            document.getElementById("obtido").value.replace(",", ".")
        ) || 0,

        resultadoPrevisto: parseFloat(
            document.getElementById("prevista").value.replace(",", ".")
        ) || 0,

        tipoMeta: tipo.value,

        funcionarios: {
            id: Number(funcionario)
        }

    };

    const response = await fetch(API_SALVAR_META, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(meta)

    });

    if (response.ok) {

        alert("Meta cadastrada com sucesso!");

        window.location.href = "MetasFuncionariosPrincipal.html";

    } else {

        const erro = await response.text();

        alert("Erro ao salvar a meta.");

        console.log(erro);

    }

}


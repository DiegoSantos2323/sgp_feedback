const API_LISTAR_FUNCIONARIOS ="http://localhost:8014/funcionarios/listartodos";
const API_SALVAR_META = "http://localhost:8014/metas/salvar";

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

    const meta = {
        descricao: document.getElementById("descricao").value,

        dataInicio: document.getElementById("inicio").value,
        dataPrazo: document.getElementById("fim").value,

        status: document.querySelector("input[name='status']:checked")?.value,

        resultadoObtido: parseFloat(document.getElementById("obtido").value || 0),
        resultadoPrevisto: parseFloat(document.getElementById("prevista").value || 0),

        tipoMeta: document.querySelector("input[name='tipo']:checked")?.value,

        funcionarios: {
            id: Number(document.getElementById("funcionario").value)
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
        alert("Meta salva com sucesso!");
        window.location.href = "MetasFuncionariosPrincipal.html";
    } else {
        const erro = await response.text();
        console.log(erro);
        alert("Erro ao salvar meta");
    }
}
const API_LISTAR_FUNCIONARIOS = "http://localhost:8014/funcionarios/listartodos";

async function carregarFuncionarios() {

    try {

        const response =
            await fetch(API_LISTAR_FUNCIONARIOS);

        if (!response.ok) {
            throw new Error("Erro ao buscar funcionários");
        }

        const funcionarios =
            await response.json();

        const select =
            document.getElementById("funcionario");

        funcionarios.forEach(funcionario => {

            const option =
                document.createElement("option");

            // valor do option
            option.value = funcionario.id;

            // texto exibido
            option.textContent = funcionario.nome;

            select.appendChild(option);
        });

    } catch (erro) {
        console.error(erro);
        alert("Erro ao carregar funcionários.");
    }
}

window.onload = carregarFuncionarios;ionarios;
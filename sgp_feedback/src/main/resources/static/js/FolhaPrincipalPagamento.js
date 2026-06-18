const API_LISTAR_TODOS = 'http://localhost:8014/pagamento/listartodos';
const API_BUSCAR_POR_NOME = 'http://localhost:8014/funcionarios/buscarnome';
const API_BUSCAR_POR_CPF = 'http://localhost:8014/funcionarios/buscacpf';
const API_BUSCAR_POR_MATRICULA = 'http://localhost:8014/funcionarios/buscarmatricula';

function verFolha(id){

    window.location.href = "PrincipalFolhaPagamento.html?id=" + id;
}

async function CarregarFolhas(){

    const response = await fetch(API_LISTAR_TODOS);
    const dados = await response.json();

    console.log(dados);

    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(folha => {

        tabela.innerHTML += `
            <tr>
                <td>${folha.funcionarios ? folha.funcionarios.matricula : "-"}</td>
                <td>${folha.funcionarios ? folha.funcionarios.cpf : "-"}</td>
                <td>${folha.funcionarios ? folha.funcionarios.nome : "Sem funcionário"}</td>
                <td>${folha.competencia}</td>
                <td>R$ ${folha.salarioBase}</td>
                <td>R$ ${folha.salarioLiquido}</td>
                <td>
                    <span class="status">
                        ${folha.status}
                    </span>
                </td>
                <td>
                    <button
                        class="btn-view"
                        onclick="verFolha(${folha.id})">
                        Ver
                    </button>
                </td>
            </tr>
        `;
    });
}

async function buscarNome(nome){

    const response = await fetch(`${API_BUSCAR_POR_NOME}/${nome}`);
    const dados = await response.json();

    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(funcionario => {

        tabela.innerHTML += `
            <tr>
                <td>${funcionario.matricula}</td>
                <td>${funcionario.cpf}</td>
                <td>${funcionario.nome}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        `;
    });
}

async function buscarCpf(cpf){

    const response = await fetch(`${API_BUSCAR_POR_CPF}/${cpf}`);
    const dados = await response.json();

    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(funcionario => {

        tabela.innerHTML += `
            <tr>
                <td>${funcionario.matricula}</td>
                <td>${funcionario.cpf}</td>
                <td>${funcionario.nome}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        `;
    });
}

async function buscarMatricula(matricula){

    const response = await fetch(`${API_BUSCAR_POR_MATRICULA}/${matricula}`);
    const dados = await response.json();

    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(funcionario => {

        tabela.innerHTML += `
            <tr>
                <td>${funcionario.matricula}</td>
                <td>${funcionario.cpf}</td>
                <td>${funcionario.nome}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        `;
    });
}
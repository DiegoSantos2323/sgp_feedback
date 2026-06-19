const API_LISTAR_TODOS = 'http://localhost:8014/pagamento/listartodos';
const API_BUSCAR_POR_NOME = 'http://localhost:8014/funcionarios/buscarnome';
const API_BUSCAR_POR_CPF = 'http://localhost:8014/funcionarios/buscacpf';
const API_BUSCAR_POR_MATRICULA = 'http://localhost:8014/funcionarios/buscarmatricula';

async function CarregarFuncionarios() {
    const response = await fetch(API_LISTAR_TODOS);
    const dados = await response.json();
    console.log(dados);

    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(folha => {
        // Pega os dados de dentro do objeto funcionarios, se ele existir
        const func = folha.funcionarios || {};

        tabela.innerHTML += `
            <tr>
                <td style="font-weight: bold; color: #1e3a8a;">${func.nome || "Sem funcionário"}</td>
                <td>${func.matricula || "-"}</td>
                <td>${func.cpf || "-"}</td>
                <td>${func.departamento || "-"}</td>
                <td>${func.cargo || "-"}</td>
                <td>${folha.competencia || "-"}</td>
                <td style="color: #15803d; font-weight: bold;">R$ ${folha.salarioBase || "0"}</td>
                <td>${func.dadosBancarios || "-"}</td>
                <td>
                    <span class="status aberta">
                        ${folha.status || "-"}
                    </span>
                </td>
                <td>
                    <button class="btn-view">Ver Detalhes</button>
                </td>
            </tr>
        `;
    });
}

async function buscarNome(nome) {
    const response = await fetch(`${API_BUSCAR_POR_NOME}/${nome}`);
    const dados = await response.json();
    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(folha => {
        const func = folha.funcionarios || {};
        tabela.innerHTML += `
            <tr>
                <td style="font-weight: bold; color: #1e3a8a;">${func.nome || "Sem funcionário"}</td>
                <td>${func.matricula || "-"}</td>
                <td>${func.cpf || "-"}</td>
                <td>${func.departamento || "-"}</td>
                <td>${func.cargo || "-"}</td>
                <td>${folha.competencia || "-"}</td>
                <td style="color: #15803d; font-weight: bold;">R$ ${folha.salarioBase || "0"}</td>
                <td>${func.dadosBancarios || "-"}</td>
                <td><span class="status aberta">${folha.status || "-"}</span></td>
                <td>
                    <button class="btn-view">Ver Detalhes</button>
                </td>
            </tr>
        `;
    });
}

async function buscarCpf(cpf) {
    const response = await fetch(`${API_BUSCAR_POR_CPF}/${cpf}`);
    const dados = await response.json();
    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(folha => {
        const func = folha.funcionarios || {};
        tabela.innerHTML += `
            <tr>
                <td style="font-weight: bold; color: #1e3a8a;">${func.nome || "Sem funcionário"}</td>
                <td>${func.matricula || "-"}</td>
                <td>${func.cpf || "-"}</td>
                <td>${func.departamento || "-"}</td>
                <td>${func.cargo || "-"}</td>
                <td>${folha.competencia || "-"}</td>
                <td style="color: #15803d; font-weight: bold;">R$ ${folha.salarioBase || "0"}</td>
                <td>${func.dadosBancarios || "-"}</td>
                <td><span class="status aberta">${folha.status || "-"}</span></td>
                <td>
                    <button class="btn-view">Ver Detalhes</button>
                </td>
            </tr>
        `;
    });
}

async function buscarMatricula(matricula) {
    const response = await fetch(`${API_BUSCAR_POR_MATRICULA}/${matricula}`);
    const dados = await response.json();
    const tabela = document.getElementById('tabelaFolhas');
    tabela.innerHTML = "";

    dados.forEach(folha => {
        const func = folha.funcionarios || {};
        tabela.innerHTML += `
            <tr>
                <td style="font-weight: bold; color: #1e3a8a;">${func.nome || "Sem funcionário"}</td>
                <td>${func.matricula || "-"}</td>
                <td>${func.cpf || "-"}</td>
                <td>${func.departamento || "-"}</td>
                <td>${func.cargo || "-"}</td>
                <td>${folha.competencia || "-"}</td>
                <td style="color: #15803d; font-weight: bold;">R$ ${folha.salarioBase || "0"}</td>
                <td>${func.dadosBancarios || "-"}</td>
                <td><span class="status aberta">${folha.status || "-"}</span></td>
                <td>
                    <button class="btn-view">Ver Detalhes</button>
                </td>
            </tr>
        `;
    });
}
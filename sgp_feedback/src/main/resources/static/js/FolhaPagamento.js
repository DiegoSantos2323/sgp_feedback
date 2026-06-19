const API_SALVAR = "http://192.168.56.1:8014/pagamento/salvar";
const API_LISTAR_TODOS = 'http://192.168.56.1:8014/funcionarios/listartodos';
const API_LISTAR_POR_ID = 'http://192.168.56.1:8014/funcionarios/listarporid/';

async function salvarFolha() {

	const funcionarioId =document.getElementById('selectFuncionario').value;

    const folha = {
        salarioBase: document.getElementById("salarioBase").value,
        bonus: document.getElementById("bonus").value,
        horaExtra: document.getElementById("horasExtras").value,
        valorHoraExtra: document.getElementById("valorHora").value,
        desconto: document.getElementById("descontos").value,
        inss: document.getElementById("inss").value,
        fgts: document.getElementById("fgts").value,
        competencia: document.getElementById("competencia").value,
		status: document.getElementById("status").value,
		salarioLiquido: parseFloat(document.getElementById("salarioLiquido").value),
		
		funcionarios: {   id: parseInt(funcionarioId)
		     }
	
    };
	console.log(folha);
    const response = await fetch(API_SALVAR, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(folha)
    });

    if (response.ok) {
        const dados = await response.json();

        alert("Folha criada com sucesso!");
        console.log(dados);	
    } else {
        alert("Erro ao salvar a folha.");
    }
}

function calcularSalarioLiquido() {

    const salarioBase = parseFloat(document.getElementById("salarioBase").value) || 0;
    const horasExtras = parseFloat(document.getElementById("horasExtras").value) || 0;
    const bonus = parseFloat(document.getElementById("bonus").value) || 0;
    const descontos = parseFloat(document.getElementById("descontos").value) || 0;
    const inss = parseFloat(document.getElementById("inss").value) || 0;

    const salarioLiquido =
        salarioBase +
        horasExtras +
        bonus -
        descontos -
        inss;

    document.getElementById("salarioLiquido").value =    salarioLiquido.toFixed(2); 
    document.getElementById("resLiquido").textContent ="R$ " + salarioLiquido.toFixed(2);
        
}


async function buscarFuncionario() {

    const id = document.getElementById("selectFuncionario").value;

    if (!id) return;

    const response = await fetch(API_LISTAR_POR_ID + id);
    const funcionario = await response.json();

    document.getElementById("salarioBase").value = funcionario.salarioBase;
}


async function carregarDadosSelect() {

const response = await fetch(API_LISTAR_TODOS);
const dados = await response.json();

const select = document.getElementById('selectFuncionario');

select.innerHTML = '';

const optionDefault = document.createElement('option');
optionDefault.value = '';
optionDefault.textContent = 'Selecione uma opção';
select.appendChild(optionDefault);

dados.forEach(item => {
const option = document.createElement('option');
option.value = item.id;
option.textContent = item.nome;
select.appendChild(option);
});

}

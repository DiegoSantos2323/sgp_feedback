const API_LISTAR_POR_ID = 'http://192.168.56.1:8014/funcionarios/listarporid';
const API_SALVAR = 'http://192.168.56.1:8014/funcionarios/salvar';
const API_ATUALIZAR = 'http://192.168.56.1:8014/funcionarios/atualizar';
const API_GERAR_MATRICULA = 'http://192.168.56.1:8014/funcionarios/gerarmatricula';

let editandoId = null;

async function salvarEtapa1() {

    const funcionario = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        rg: document.getElementById('rg').value,
        dataNascimento: document.getElementById('nascimento').value,
        sexo: document.getElementById('sexo').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value,
        cep: document.getElementById('cep').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };

    if (!validarCPF(funcionario.cpf)) {
        alert('CPF inválido! Informe um CPF válido para prosseguir.');
        document.getElementById('cpf').focus();
        return;
    }

    localStorage.setItem('funcionario', JSON.stringify(funcionario));
    window.location.href = 'cadastro-etapa2.html';
}
//gera matricula automatica
window.onload = async function () {

    const campoMatricula = document.getElementById('matricula');

    if (campoMatricula) {
        const response = await fetch(API_GERAR_MATRICULA);
        const matricula = await response.text();

        campoMatricula.value = matricula;
    }
};

async function Cadastrar() {

    const etapa1 = JSON.parse(localStorage.getItem('funcionario')) || {};

    if (!validarCPF(etapa1.cpf)) {
        alert('CPF inválido! Informe um CPF válido para prosseguir.');
        return;
    }

    const etapa2 = {
        matricula: document.getElementById('matricula').value,
        cargo: document.getElementById('cargo').value,
        departamento: document.getElementById('departamento').value,
        dataAdmissao: document.getElementById('admissao').value,
        salarioBase: parseFloat(document.getElementById('salario').value),
        status: document.querySelector('input[name="status"]:checked')?.value,
        banco: document.getElementById('banco').value,
        agencia: document.getElementById('agencia').value,
        conta: document.getElementById('conta').value,
        tipoConta: document.getElementById('tipoConta').value
    };

	//data de admmissão não pode ser futura
	const hoje = new Date();
	const dataAdmissao = new Date(etapa2.dataAdmissao);

	hoje.setHours(0, 0, 0, 0);
	dataAdmissao.setHours(0, 0, 0, 0);

	if (dataAdmissao > hoje) {
	    alert('A data de admissão não pode ser futura.');
	    document.getElementById('admissao').focus();
	    return;
	}
	
    const funcionarioCompleto = {
        ...etapa1,
        ...etapa2
    };
    const response = await fetch(API_SALVAR, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcionarioCompleto)
    });
    if (response.ok) {
        alert('Funcionário cadastrado com sucesso!');
        localStorage.removeItem('funcionario');
        limparFormulario();
        window.location.href = 'listar-funcionarios.html';
    } else {
        const erro = await response.text();
        console.log(erro);
        alert('Erro ao cadastrar funcionário!');
    }
}

async function buscarCep(cep) {

    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    const dados = await response.json();
    document.getElementById('endereco').value = dados.logradouro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.uf;
}

//validar cpf
function validarCPF(cpf) {
	
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
       resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function limparFormulario() {

    document.getElementById('matricula').value = '';
    document.getElementById('cargo').value = '';
    document.getElementById('departamento').value = '';
    document.getElementById('admissao').value = '';
    document.getElementById('salario').value = '';
    document.getElementById('banco').value = '';
    document.getElementById('agencia').value = '';
    document.getElementById('conta').value = '';
    document.getElementById('tipoConta').value = '';
   const status = document.querySelector('input[name="status"]:checked');
    if (status) {
        status.checked = false;
    }
}
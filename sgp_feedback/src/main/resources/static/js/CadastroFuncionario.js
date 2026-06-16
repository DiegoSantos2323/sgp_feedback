
const API_LISTAR_POR_ID = 'http://localhost:8014/funcionarios/listarporid';
const API_SALVAR = 'http://localhost:8014/funcionarios/salvar';
const API_ATUALIZAR = 'http://localhost:8014/funcionarios/atualizar';
const API_BUSCAR_POR_NOME = 'http://localhost:8014/funcionarios/buscarnome';
const API_BUSCAR_POR_CPF = 'http://localhost:8014/funcionarios/buscacpf';
const API_BUSCAR_POR_MATRICULA = 'http://localhost:8014/funcionarios/buscarmatricula';

let editandoId = null;

function salvarEtapa1() {

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

    localStorage.setItem("funcionario", JSON.stringify(funcionario));
    window.location.href = "cadastro-etapa2.html";
}

async function Cadastrar() {

    const etapa1 = JSON.parse(localStorage.getItem("funcionario")) || {};

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
    // junta as duas etapas
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
        alert("Funcionário cadastrado com sucesso!");
        localStorage.removeItem("funcionario");
		limparFormulario();
		
    } else {
        const erro = await response.text();
        console.log(erro);
        alert("Erro ao cadastrar funcionário!");
    }
}



function limparFormulario(){
	 document.getElementById('matricula').value="",
	      document.getElementById('cargo').value="",
	    document.getElementById('departamento').value="",
	      document.getElementById('admissao').value="",
	     parseFloat(document.getElementById('salario').value=""),
	   document.querySelector('input[name="status"]:checked')?.value="",
	      document.getElementById('banco').value="",
	      document.getElementById('agencia').value="",
	      document.getElementById('conta').value="",
	     document.getElementById('tipoConta').value="";
}
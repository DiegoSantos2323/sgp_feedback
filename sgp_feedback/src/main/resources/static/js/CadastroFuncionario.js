const API_LISTAR_TODOS = 'http://localhost:8014/funcionarios/listartodos';
const API_LISTAR_POR_ID = 'http://localhost:8014/funcionarios/listarporid';
const API_SALVAR = 'http://localhost:8014/funcionarios/salvar';
const API_ATUALIZAR = 'http://localhost:8014/funcionarios/atualizar';
const API_BUSCAR_POR_NOME = 'http://localhost:8014/funcionarios/buscarnome';
const API_BUSCAR_POR_CPF = 'http://localhost:8014/funcionarios/buscarnome';
const API_BUSCAR_POR_MATRICULA = 'http://localhost:8014/funcionarios/buscarmatricula';

let editandoId=null;

async function Cadastrar() {

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
        estado: document.getElementById('estado').value,
			matricula: document.getElementById('matricula').value,
			  cargo: document.getElementById('cargo').value,
		      departamento: document.getElementById('departamento').value,
		      dataAdmissao: document.getElementById('admissao').value,
		      salarioBase: document.getElementById('salario').value,
		      supervisor: document.getElementById('supervisor').value,
		      status: document.querySelector('input[name="status"]:checked').value,
		      banco: document.getElementById('banco').value,
		      agencia: document.getElementById('agencia').value,
		      conta: document.getElementById('conta').value,
		      tipoConta: document.getElementById('tipoConta').value,
		      senha: document.getElementById('senha').value,
		      confirmarSenha: document.getElementById('confirmarSenha').value

    };
    console.log(funcionario);

    const response = await fetch(API_SALVAR,{
		method:'POST',
		headers:{
			'Content-Type': 'application/json'
				    },
				    body: JSON.stringify(funcionario)
		
	});//chave response
	if(response.ok){
		alert("Funcionário cadastrado com sucesso!!!")
	}else{
		alert("Erro ao cadastrar funcionário")
	}

}//chave cadastrar
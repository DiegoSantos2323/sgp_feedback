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
 
    nome: localStorage.getItem("nome"),
    cpf: localStorage.getItem("cpf"),
    dataNascimento: localStorage.getItem("nascimento"),
    sexo: localStorage.getItem("sexo"),
    estadoCivil: localStorage.getItem("estadoCivil"),
    email: localStorage.getItem("email"),
    telefone: localStorage.getItem("telefone"),
    endereco: localStorage.getItem("endereco"),
    cep: localStorage.getItem("cep"),
    cidade: localStorage.getItem("cidade"),
    estado: localStorage.getItem("estado"),


    matricula: document.getElementById('matricula').value,
    cargo: document.getElementById('cargo').value,
    departamento: document.getElementById('departamento').value,
    dataAdmissao: document.getElementById('admissao').value,
    salarioBase: document.getElementById('salario').value,
    status: document.querySelector('input[name="status"]:checked').value === 'ativo',
    banco: document.getElementById('banco').value,
    agencia: document.getElementById('agencia').value,
    conta: document.getElementById('conta').value,
    tipoConta: document.getElementById('tipoConta').value
  };

  console.log(funcionario);

  const response = await fetch(API_SALVAR, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(funcionario)
  });

  if (response.ok) {
    alert("Funcionário cadastrado com sucesso!!!");
    localStorage.clear(); 
  } else {
    const error = await response.text();
    console.log(error);
    alert("Erro ao cadastrar funcionário");
  }
}
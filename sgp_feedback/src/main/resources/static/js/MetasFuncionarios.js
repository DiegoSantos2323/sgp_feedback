const API_SALVAR = 'http://localhost:8014/meta/salvar';
const API_LISTAR_FUNCIONARIOS = 'http://localhost:8014/funcionarios/listartodos';

async function CriarMeta(){

	const funcionarioId = document.getElementById("funcionario").value;
	const meta = {
		funcionarios:{
			id:parseInt(funcionarioId)
		},
		titulo:document.getElementById("titulo").value,
		descricao:document.getElementById("descricao").value,
		tipoMeta:document.querySelector('input[name="tipo"]:checked')?.value,
		resultadoPrevisto:parseFloat(document.getElementById("prevista").value) || 0,
		resultadoObtido:parseFloat(document.getElementById("obtido").value) || 0,
		dataInicio:document.getElementById("inicio").value,
		dataPrazo:document.getElementById("fim").value,
		status:document.querySelector('input[name="status"]:checked')?.value
	};

	console.log(meta);

	const response = await fetch(API_SALVAR,{
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify(meta)
	});

	if(response.ok){
		alert("Meta cadastrada com sucesso!");
	}else{

		alert("Erro ao cadastrar meta!");
	}
}

async function carregarFuncionarios(){

	const response = await fetch(API_LISTAR_FUNCIONARIOS);
	const dados = await response.json();

	const select = document.getElementById("funcionario");

	select.innerHTML = '<option value="">Selecione o funcionário...</option>';

	dados.forEach(dados => {

		select.innerHTML += `
			<option value="${funcionario.id}">
				${funcionario.nome}
			</option>
		`;

	});
}
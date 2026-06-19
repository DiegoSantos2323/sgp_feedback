const API_LISTAR = 'http://localhost:8014/funcionarios/listartodos';
const API_SALVAR_AVALIACAO = 'http://localhost:8014/feedback/salvar';


window.onload = async function(){

    const response = await fetch(API_LISTAR);
    const funcionarios = await response.json();

    const select = document.getElementById('funcionario');

    funcionarios.forEach(funcionario => {
        select.innerHTML += `
            <option value="${funcionario.id}">
                ${funcionario.nome}
            </option>
        `;
    });
}

async function Cadastrar(){

    const avaliacao = {
        funcionario:{
            id: parseInt(document.getElementById('funcionario').value)
        },
        meta:{
            id: parseInt(document.getElementById('meta').value)
        },
        dataAvaliacao: document.getElementById('data').value,
        resultado: parseFloat(document.getElementById('resultado').value),
        percentualAtingido: parseFloat(document.getElementById('percentual').value),
        comentariosPositivos: document.getElementById('positivos').value
    };

    const response = await fetch(API_SALVAR_AVALIACAO,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(avaliacao)
    });

    if(response.ok){
        alert('Avaliação registrada com sucesso!');
        window.location.href='AvaliacaoDeDesempenho.html';
    }else{
        const erro = await response.text();
        console.log(erro);
        alert('Erro ao registrar avaliação!');
		return;
    }
}
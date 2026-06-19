<<<<<<< HEAD
const API_LISTAR_FUNCIONARIOS = "http://localhost:8014/funcionarios/listartodos";

//LISTAR FUNCIONÁRIOS

async function carregarFuncionarios() {

    const response = await fetch(API_LISTAR_FUNCIONARIOS);

    if (!response.ok) {
        alert("Erro ao carregar funcionários.");
        return;
    }

    const funcionarios = await response.json();

    const select = document.getElementById("funcionario");

    select.innerHTML = `
        <option value="" selected disabled>
            Selecione o funcionário...
        </option>
    `;

    funcionarios.forEach(funcionario => {

        select.innerHTML += `
            <option value="${funcionario.id}">
                ${funcionario.nome}
            </option>
        `;

    });

}

// NOTA DE DEZEMPENHO

window.onload = function () {

    carregarFuncionarios();

    let nota = 0;

    const estrelas = document.querySelectorAll(".star-g");

    estrelas.forEach(function (estrela) {

        estrela.addEventListener("click", function () {

            nota = Number(this.dataset.nota);

            atualizarEstrelas();

        });

    });

    function atualizarEstrelas() {

        estrelas.forEach(function (estrela) {

            if (Number(estrela.dataset.nota) <= nota) {

                estrela.classList.add("preenchida");
                estrela.classList.remove("vazia");

            } else {

                estrela.classList.remove("preenchida");
                estrela.classList.add("vazia");

            }

        });

        document.getElementById("notaTexto").innerHTML = nota + "/5";

    }

};

=======
const API_LISTAR = 'http://192.168.56.1:8014/funcionarios/listartodos';
const API_SALVAR_AVALIACAO = 'http://192.168.56.1:8014/feedback/salvar';


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
>>>>>>> branch 'master' of https://github.com/DiegoSantos2323/sgp_feedback.git

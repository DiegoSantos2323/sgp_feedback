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


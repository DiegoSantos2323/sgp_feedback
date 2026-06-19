const API_LISTAR_METAS = "http://localhost:8014/meta/listartodos";


// CADASTRAR METAS

window.onload = listarMetas;

async function listarMetas() {

    const response = await fetch(API_LISTAR_METAS);

    if (!response.ok) {
        alert("Erro ao carregar as metas.");
        return;
    }

    const metas = await response.json();

    const lista = document.getElementById("listaMetas");

    lista.innerHTML = "";

    let total = metas.length;
    let andamento = 0;
    let concluidas = 0;
    let somaPercentual = 0;

    metas.forEach(meta => {

        if (meta.status === "Em Andamento") {
            andamento++;
        }

        if (meta.status === "Concluída") {
            concluidas++;
        }

        let percentual = 0;

        if (meta.resultadoPrevisto > 0) {
            percentual = (meta.resultadoObtido / meta.resultadoPrevisto) * 100;

            if (percentual > 100) {
                percentual = 100;
            }
        }

        somaPercentual += percentual;

        let nome = meta.funcionarios.nome;

        let avatar = "";

        const partes = nome.split(" ");

        if (partes.length >= 2) {
            avatar = partes[0][0] + partes[1][0];
        } else {
            avatar = nome.substring(0, 2);
        }

        avatar = avatar.toUpperCase();

        const previsto = Number(meta.resultadoPrevisto).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        const obtido = Number(meta.resultadoObtido).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        const inicio = meta.dataInicio.split("-").reverse().join("/");

        const fim = meta.dataPrazo.split("-").reverse().join("/");

        lista.innerHTML += `

        <div class="meta-card">

            <div class="meta-topo">

                <div class="meta-func">

                    <div class="avatar">
                        ${avatar}
                    </div>

                    <div>

                        <p class="func-nome">
                            ${nome}
                        </p>

                        <p class="func-desc">
                            ${meta.descricao}
                        </p>

                    </div>

                </div>

                <div class="meta-badges">

                    <span class="tipo-badge">
                        ${meta.tipoMeta}
                    </span>

                    <span class="status-badge">
                        ${meta.status}
                    </span>

                </div>

            </div>

            <div class="progress-wrap">

                <div class="progress-bar">

                    <div class="progress-fill"
                        style="width:${percentual}%">
                    </div>

                </div>

                <div class="progress-labels">

                    <span class="pct-label">

                        ${percentual.toFixed(0)}%

                    </span>

                    <span class="pct-meta">

                        Meta: 100%

                    </span>

                </div>

            </div>

            <div class="meta-rodape">

                <div class="meta-numeros">

                    <div class="meta-num-item">

                        <p class="num-label">
                            Meta Prevista
                        </p>

                        <p class="num-valor">
                            ${previsto}
                        </p>

                    </div>

                    <div class="meta-num-item">

                        <p class="num-label">
                            Resultado Obtido
                        </p>

                        <p class="num-valor">
                            ${obtido}
                        </p>

                    </div>

                    <div class="meta-num-item">

                        <p class="num-label">
                            Período
                        </p>

                        <p class="num-valor">
                            ${inicio} - ${fim}
                        </p>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

    document.getElementById("totalMetas").innerHTML = total;

    document.getElementById("metasAndamento").innerHTML = andamento;

    document.getElementById("metasConcluidas").innerHTML = concluidas;

    let media = 0;

    if (total > 0) {
        media = somaPercentual / total;
    }

    document.getElementById("mediaGeral").innerHTML = media.toFixed(0) + "%";

}
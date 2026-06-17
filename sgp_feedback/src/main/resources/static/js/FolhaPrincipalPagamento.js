const API_LISTAR_TODOS = 'http://localhost:8014/pagamento/listartodos';

function verFolha(id){
	
     window.location.href = "PrincipalFolhaPagamento.html" + id;
}

async function CarregarFolhas(){
	
	const reponse = await fetch (API_LISTAR_TODOS);
	const dados = await reponse.json();
	
	console.log( dados )
	const tabela = document.getElementById('tabelaFolhas');
	tabela.innerHTML="";
	 dados.forEach(folha => {

	        tabela.innerHTML += `
	            <tr>
	                <td>${folha.funcionarios ? folha.funcionarios.nome : "Sem funcionário"}</td>
	                <td>${folha.competencia}</td>
	                <td>R$ ${folha.salarioBase}</td>
	                <td>R$ ${folha.salarioLiquido}</td>
	                <td>
	                    <span class="status">
	                        ${folha.status}
	                    </span>
	                </td>
	                <td>
	                    <button		
						         class="btn-view"
	                        onclick="verFolha(${folha.id})">
	                        Ver
	                    </button>
	                </td>
	            </tr>
	        `;
	    });

	}
		
	
	

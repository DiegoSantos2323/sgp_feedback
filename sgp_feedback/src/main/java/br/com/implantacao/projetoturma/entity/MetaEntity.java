		package br.com.implantacao.projetoturma.entity;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "Metas")
public class MetaEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;//: Nome curto da meta (ex: "Aumentar vendas em 10%").
    
    @NotBlank(message = "Campo Obrigatório!!!")
    private String descricao;//Detalhamento do que precisa ser feito.
    
    @NotBlank(message = "Campo Obrigatório!!!")
    private LocalDate dataInicio;
    
    @NotBlank(message = "Campo Obrigatório!!!")
    private LocalDate dataPrazo;
    
    @NotBlank(message = "Campo Obrigatório!!!")
    private String status; // Pendente, Em Andamento, Concluída
    
    
    private float resultadoPrevisto;//não é obrigatório
    

    @NotBlank(message = "Campo Obrigatório!!!")
    private String tipoMeta;
    
    @ManyToOne
    @JoinColumn(name = "funcionariosID")
    private FuncionariosEntity funcionarios;

    
    
    //getters and setters
	public float getResultadoPrevisto() {
		return resultadoPrevisto;
	}

	public void setResultadoPrevisto(float resultadoPrevisto) {
		this.resultadoPrevisto = resultadoPrevisto;
	}

	public String getTipoMeta() {
		return tipoMeta;
	}

	public void setTipoMeta(String tipoMeta) {
		this.tipoMeta = tipoMeta;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public LocalDate getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(LocalDate dataInicio) {
		this.dataInicio = dataInicio;
	}

	public LocalDate getDataPrazo() {
		return dataPrazo;
	}

	public void setDataPrazo(LocalDate dataPrazo) {
		this.dataPrazo = dataPrazo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}



	public FuncionariosEntity getFuncionarios() {
		return funcionarios;
	}

	public void setFuncionarios(FuncionariosEntity funcionarios) {
		this.funcionarios = funcionarios;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

    
}
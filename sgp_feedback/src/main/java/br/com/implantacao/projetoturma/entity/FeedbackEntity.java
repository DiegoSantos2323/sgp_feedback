package br.com.implantacao.projetoturma.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
@Entity
@Table(name = "Feedback")
public class FeedbackEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "funcionarioID")
	private FuncionariosEntity funcionario;
	
	@ManyToOne
	@JoinColumn(name = "metaID")
	private MetaEntity meta;
	
	@NotNull(message = "Campo Obrigatório!!!")
	private LocalDate dataAvaliacao;
	
	@NotNull(message = "Campo Obrigatório!!!")
	private float resultado;
	
	@NotNull(message = "Campo Obrigatório!!!")
	private float percentualAtingido; //percentual atingido
	
	
	private String comentariosPositivos;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public FuncionariosEntity getFuncionario() {
		return funcionario;
	}
	public void setFuncionario(FuncionariosEntity funcionario) {
		this.funcionario = funcionario;
	}
	public MetaEntity getMeta() {
		return meta;
	}
	public void setMeta(MetaEntity meta) {
		this.meta = meta;
	}
	public LocalDate getDataAvaliacao() {
		return dataAvaliacao;
	}
	public void setDataAvaliacao(LocalDate dataAvaliacao) {
		this.dataAvaliacao = dataAvaliacao;
	}
	public float getResultado() {
		return resultado;
	}
	public void setResultado(float resultado) {
		this.resultado = resultado;
	}

	public float getPercentualAtingido() {
		return percentualAtingido;
	}
	public void setPercentualAtingido(float percentualAtingido) {
		this.percentualAtingido = percentualAtingido;
	}
	public String getComentariosPositivos() {
		return comentariosPositivos;
	}
	public void setComentariosPositivos(String comentariosPositivos) {
		this.comentariosPositivos = comentariosPositivos;
	}
	
	
	
}


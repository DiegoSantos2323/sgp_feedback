	package br.com.implantacao.projetoturma.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
@Entity
@Table(name = "FolhaPagamento")
public class FolhaPagamentoEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "funcionariosID")
	private FuncionariosEntity funcionarios;
	
	@NotNull(message = "Campo Obrigatório!!!")
	private float salarioBase;
	
	private String banco;
	private String tipoConta;//corrente, poupança
	private String beneficios;//vale transporte , vale refeição etc..
	private float desconto;
	
	@NotNull(message = "Campo Obrigatório!!!")
	private String competencia;
	private BigDecimal horaExtra;
	private BigDecimal valorHoraExtra;
	private BigDecimal bonus;
	private BigDecimal inss;
	private BigDecimal fgts;
	private BigDecimal salarioLiquido;
	
	@NotBlank(message = "Campo Obrigatório!!!")
	private String status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FuncionariosEntity getFuncionarios() {
		return funcionarios;
	}

	public void setFuncionarios(FuncionariosEntity funcionarios) {
		this.funcionarios = funcionarios;
	}

	public float getSalarioBase() {
		return salarioBase;
	}

	public void setSalarioBase(float salarioBase) {
		this.salarioBase = salarioBase;
	}

	public String getBanco() {
		return banco;
	}

	public void setBanco(String banco) {
		this.banco = banco;
	}

	public String getTipoConta() {
		return tipoConta;
	}

	public void setTipoConta(String tipoConta) {
		this.tipoConta = tipoConta;
	}

	public String getBeneficios() {
		return beneficios;
	}

	public void setBeneficios(String beneficios) {
		this.beneficios = beneficios;
	}

	public float getDesconto() {
		return desconto;
	}

	public void setDesconto(float desconto) {
		this.desconto = desconto;
	}

	public String getCompetencia() {
		return competencia;
	}

	public void setCompetencia(String competencia) {
		this.competencia = competencia;
	}

	public BigDecimal getHoraExtra() {
		return horaExtra;
	}

	public void setHoraExtra(BigDecimal horaExtra) {
		this.horaExtra = horaExtra;
	}

	public BigDecimal getValorHoraExtra() {
		return valorHoraExtra;
	}

	public void setValorHoraExtra(BigDecimal valorHoraExtra) {
		this.valorHoraExtra = valorHoraExtra;
	}

	public BigDecimal getBonus() {
		return bonus;
	}

	public void setBonus(BigDecimal bonus) {
		this.bonus = bonus;
	}

	public BigDecimal getInss() {
		return inss;
	}

	public void setInss(BigDecimal inss) {
		this.inss = inss;
	}

	public BigDecimal getFgts() {
		return fgts;
	}

	public void setFgts(BigDecimal fgts) {
		this.fgts = fgts;
	}

	public BigDecimal getSalarioLiquido() {
		return salarioLiquido;
	}

	public void setSalarioLiquido(BigDecimal salarioLiquido) {
		this.salarioLiquido = salarioLiquido;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	
}
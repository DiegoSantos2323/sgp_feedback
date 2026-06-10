package br.com.implantacao.projetoturma.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
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
	
	@OneToMany
	@JoinColumn(name = "funcionariosID")
	private FuncionariosEntity funcionarios;
	
	private float salarioBase;
	private String banco;
	private String tipoConta;//corrente, poupança
	private String beneficios;//vale transporte , vale refeição etc..
	private float desconto;
	private LocalDate competencia;
	private float horaExtra;
	private float valorHoraExtra;
	private float bonus;
	private float inss;
	private float fgts;
	private float salarioLiquido;
	private String status;
	
	
	
	public FuncionariosEntity getFuncionarios() {
		return funcionarios;
	}
	public void setFuncionarios(FuncionariosEntity funcionarios) {
		this.funcionarios = funcionarios;
	}
	public LocalDate getCompetencia() {
		return competencia;
	}
	public void setCompetencia(LocalDate competencia) {
		this.competencia = competencia;
	}
	public float getHoraExtra() {
		return horaExtra;
	}
	public void setHoraExtra(float horaExtra) {
		this.horaExtra = horaExtra;
	}
	public float getValorHoraExtra() {
		return valorHoraExtra;
	}
	public void setValorHoraExtra(float valorHoraExtra) {
		this.valorHoraExtra = valorHoraExtra;
	}
	public float getBonus() {
		return bonus;
	}
	public void setBonus(float bonus) {
		this.bonus = bonus;
	}
	public float getInss() {
		return inss;
	}
	public void setInss(float inss) {
		this.inss = inss;
	}
	public float getFgts() {
		return fgts;
	}
	public void setFgts(float fgts) {
		this.fgts = fgts;
	}
	public float getSalarioLiquido() {
		return salarioLiquido;
	}
	public void setSalarioLiquido(float salarioLiquido) {
		this.salarioLiquido = salarioLiquido;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	
	
	
	
}

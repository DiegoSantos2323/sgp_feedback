package br.com.implantacao.projetoturma.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;

import org.hibernate.validator.constraints.br.CPF;
@Entity
@Table(name = "Funcionarios")
public class FuncionariosEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
		//dados pessoais
		@NotBlank(message = "Campo Obrigatório!!!")
		private String nome;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		@CPF
		private String cpf;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private LocalDate dataNascimento;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String sexo;
		
		private String estadoCivil;//Não é obrigatório
		
		//contato
		@NotBlank(message = "Campo Obrigatório!!!")
		@Email
		private String email;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String telefone;
		
		@NotBlank(message = "Campo Obrigatório!!!")		
		private String endereco;//logradouro
		
		@NotBlank(message = "Campo Obrigatório!!!")		
		private String cidade;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String estado;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String cep;
	
		//dados profissionais
		@NotBlank(message = "Campo Obrigatório!!!")
		private String cargo;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String departamento;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		@Column(unique = true)
		private String matricula;
		
		@NotNull(message = "Data de admissão é obrigatória")
		@PastOrPresent(message = "A data de admissão não pode ser futura")
		private LocalDate dataAdmissao;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private float salarioBase;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private boolean status;
		
		//dados bancarios
		@NotBlank(message = "Campo Obrigatório!!!")
		private String banco;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String agencia;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String conta;
		
		@NotBlank(message = "Campo Obrigatório!!!")
		private String tipoConta;
		
	
	
	public LocalDate getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public String getEstadoCivil() {
		return estadoCivil;
	}
	public void setEstadoCivil(String estadoCivil) {
		this.estadoCivil = estadoCivil;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getMatricula() {
		return matricula;
	}
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	public LocalDate getDataAdmissao() {
		return dataAdmissao;
	}
	public void setDataAdmissao(LocalDate dataAdmissao) {
		this.dataAdmissao = dataAdmissao;
	}
	public float getSalarioBase() {
		return salarioBase;
	}
	public void setSalarioBase(float salarioBase) {
		this.salarioBase = salarioBase;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getBanco() {
		return banco;
	}
	public void setBanco(String banco) {
		this.banco = banco;
	}
	public String getAgencia() {
		return agencia;
	}
	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}
	public String getConta() {
		return conta;
	}
	public void setConta(String conta) {
		this.conta = conta;
	}
	public String getTipoConta() {
		return tipoConta;
	}
	public void setTipoConta(String tipoConta) {
		this.tipoConta = tipoConta;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getCargo() {
		return cargo;
	}
	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	public String getDepartamento() {
		return departamento;
	}
	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}
	
	
}

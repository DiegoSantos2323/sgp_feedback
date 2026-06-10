package br.com.implantacao.projetoturma.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.implantacao.projetoturma.entity.FuncionariosEntity;
import br.com.implantacao.projetoturma.repository.FuncionariosRepository;

@RestController
@RequestMapping("/funcionarios")
public class FuncionariosController {

	@Autowired
	private FuncionariosRepository repository;
	
	@GetMapping("/listartodos")
	@ResponseStatus(HttpStatus.OK)
	public List<FuncionariosEntity> ListarTodos(){
		return repository.findAll();
	}//listar todos
	
	
	@GetMapping("/listarporid/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Optional<FuncionariosEntity> ListarPorId(@PathVariable Long id){
		return repository.findById(id);
	}//listar por id
	
	@PostMapping("/salvar")
	@ResponseStatus(HttpStatus.CREATED)
	public FuncionariosEntity Salvar(@RequestBody FuncionariosEntity salvar) {
		return repository.save(salvar);
	}//salvar
	
	@DeleteMapping("/deletar/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public String Deletar(@PathVariable Long id) {
		if(repository.existsById(id)) {
			repository.deleteById(id);
			return "Funcionário Deletado";
		}
		return "Funcionário não encontrado";
	}//deletar
	
	@PutMapping("/atualizar/{id}")
	@ResponseStatus(HttpStatus.OK)
	public FuncionariosEntity Atualizar(@RequestBody FuncionariosEntity atualizar, @PathVariable Long id) {
		if(repository.existsById(id)) {
			atualizar.setId(id);
			return repository.save(atualizar);
		}
		return null;
	}//atualizar
	
	@GetMapping("/buscarnome/{nome}")
	@ResponseStatus(HttpStatus.OK)
	public List<FuncionariosEntity> BuscarPorNome(@PathVariable String nome){
		return repository.findByNomeContainingIgnoreCase(nome);
	}// buscar por nome
	
	@GetMapping("/buscacpf/{cpf}")
	@ResponseStatus(HttpStatus.OK)
	public List<FuncionariosEntity> BuscarPorCpf(@PathVariable String cpf){
		return repository.findByCpfContainingIgnoreCase(cpf);
	}// buscar por cpf
	
	@GetMapping("/buscarmatricula/{matricula}")
	@ResponseStatus(HttpStatus.OK)
	public List<FuncionariosEntity> BuscarPorMatricula(@PathVariable String matricula){
		return repository.findByMatriculaContainingIgnoreCase(matricula);
	}//buscar por matricula
	
	
	
	
	
	
	
	
}

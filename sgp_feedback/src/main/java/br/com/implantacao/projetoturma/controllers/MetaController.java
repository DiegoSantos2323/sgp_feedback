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

import br.com.implantacao.projetoturma.entity.MetaEntity;
import br.com.implantacao.projetoturma.repository.MetaRepository;

@RestController
@RequestMapping("/meta")
public class MetaController {

	@Autowired
	private MetaRepository repository;
	
	@GetMapping("/listartodos")
	@ResponseStatus(HttpStatus.OK)
	public List<MetaEntity> ListarTodos(){
		return repository.findAll();
	}//listar todos
	
	@GetMapping("/listarporid/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Optional<MetaEntity> ListarPorId(@PathVariable Long id){
		return repository.findById(id);
	}//listar por id
	
	@PostMapping("/salvar")
	@ResponseStatus(HttpStatus.CREATED)
	public MetaEntity Salvar(@RequestBody MetaEntity salvar) {
		return repository.save(salvar);
	}//salvar
	
	@DeleteMapping("/deletar/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public String deletar(@PathVariable Long id) {
		if(repository.existsById(id)){
			repository.deleteById(id);
			return "deletado";
		}
		return "Não encontrado";
	}//deletar
	
	@PutMapping("/atualizar/{id}")
	@ResponseStatus(HttpStatus.OK)
	public MetaEntity Atualizar(@RequestBody MetaEntity atualizar, @PathVariable Long id) {
		if(repository.existsById(id)) {
			atualizar.setId(id);
			return repository.save(atualizar);
		}
		return null;
	}//atualizar
	
	
}

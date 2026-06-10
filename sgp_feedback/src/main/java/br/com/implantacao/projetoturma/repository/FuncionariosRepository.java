package br.com.implantacao.projetoturma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.implantacao.projetoturma.entity.FuncionariosEntity;
@Repository
public interface FuncionariosRepository extends JpaRepository<FuncionariosEntity, Long>{

	List<FuncionariosEntity> findByNomeContainingIgnoreCase(String nome);
	List<FuncionariosEntity> findByCpfContainingIgnoreCase(String cpf);
	List<FuncionariosEntity> findByMatriculaContainingIgnoreCase(String matricula);
	
}

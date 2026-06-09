package br.com.implantacao.projetoturma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.implantacao.projetoturma.entity.FolhaPagamentoEntity;
@Repository
public interface FolhaPagamentoRepository extends JpaRepository<FolhaPagamentoEntity, Long>{

}

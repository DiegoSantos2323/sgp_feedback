package br.com.implantacao.projetoturma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.implantacao.projetoturma.entity.FeedbackEntity;
@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackEntity ,Long> {

}

package io.github.marcio.clientes.model.repository;

import io.github.marcio.clientes.model.entity.ServicoPrestado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<ServicoPrestado, Integer> {
}

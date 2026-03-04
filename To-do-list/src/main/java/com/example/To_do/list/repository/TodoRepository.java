package com.example.To_do.list.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.To_do.list.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
package com.todoreact.project.repository;

import com.todoreact.project.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task>findByCompleted(boolean status);
}

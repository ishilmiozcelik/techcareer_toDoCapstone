package com.todoreact.project.controller;

import com.todoreact.project.model.Task;
import com.todoreact.project.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id).orElse(null);
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        if (taskService.getTaskById(id).isPresent()) {
            task.setId(id);
            return taskService.saveTask(task);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    @GetMapping("/completed")
    public List<Task> getCompletedTasks() {
        return taskService.getCompletedTasks();
    }

    @GetMapping("/todo")
    public List<Task> getTodoTasks() {
        return taskService.getTodoTasks();
    }
}
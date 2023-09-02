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

    //tüm taskleri getir
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    //id'ye göre taski getir
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id).orElse(null);
    }

    //task kaydet
    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }

    //task güncelle
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        if (taskService.getTaskById(id).isPresent()) {
            task.setId(id);
            return taskService.saveTask(task);
        }
        return null;
    }

    //id'ye göre taski sil
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    //tamamlanmış taskleri getir
    @GetMapping("/completed")
    public List<Task> getCompletedTasks() {
        return taskService.getCompletedTasks();
    }

    //yapılacak taskleri getir
    @GetMapping("/todo")
    public List<Task> getTodoTasks() {
        return taskService.getTodoTasks();
    }
}
package com.portfolio.achievement;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/achievements")
@RequiredArgsConstructor
public class AchievementController {
    private final AchievementService service;

    @GetMapping
    public List<Achievement> all(){ return service.all(); }
    @GetMapping("/{id}")
    public Achievement get(@PathVariable Long id){ return service.get(id); }
    @PostMapping
    public Achievement create(@RequestBody Achievement a){ return service.create(a);}    
    @PutMapping("/{id}")
    public Achievement update(@PathVariable Long id, @RequestBody Achievement a){ return service.update(id,a);}    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){ service.delete(id); return ResponseEntity.noContent().build(); }
}

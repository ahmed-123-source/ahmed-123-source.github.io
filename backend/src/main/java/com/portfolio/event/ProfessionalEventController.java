package com.portfolio.event;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class ProfessionalEventController {
    private final ProfessionalEventService service;

    @GetMapping
    public List<ProfessionalEvent> all(){ return service.all(); }
    @GetMapping("/{id}")
    public ProfessionalEvent get(@PathVariable Long id){ return service.get(id); }
    @PostMapping
    public ProfessionalEvent create(@RequestBody ProfessionalEvent e){ return service.create(e);}    
    @PutMapping("/{id}")
    public ProfessionalEvent update(@PathVariable Long id, @RequestBody ProfessionalEvent e){ return service.update(id,e);}    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){ service.delete(id); return ResponseEntity.noContent().build(); }
}

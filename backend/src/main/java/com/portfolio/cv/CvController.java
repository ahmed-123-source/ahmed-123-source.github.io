package com.portfolio.cv;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cv")
@RequiredArgsConstructor
public class CvController {
    private final CvService service;

    @GetMapping
    public List<CvDocument> all(){ return service.all(); }

    @GetMapping("/latest")
    public CvDocument latest(){ return service.latest(); }

    @PostMapping
    public CvDocument create(@RequestBody CvDocument d){ return service.create(d);}    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){ service.delete(id); return ResponseEntity.noContent().build(); }
}

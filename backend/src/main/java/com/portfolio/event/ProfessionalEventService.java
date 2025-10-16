package com.portfolio.event;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfessionalEventService {
    private final ProfessionalEventRepository repo;

    public ProfessionalEvent create(ProfessionalEvent e){ e.setId(null); return repo.save(e);}    
    public ProfessionalEvent update(Long id, ProfessionalEvent e){
        ProfessionalEvent existing = repo.findById(id).orElseThrow();
        existing.setName(e.getName());
        existing.setDate(e.getDate());
        existing.setLocation(e.getLocation());
        existing.setDescription(e.getDescription());
        existing.setUrl(e.getUrl());
        return existing;
    }
    public List<ProfessionalEvent> all(){ return repo.findAll(); }
    public ProfessionalEvent get(Long id){ return repo.findById(id).orElseThrow(); }
    public void delete(Long id){ repo.deleteById(id);}    
}

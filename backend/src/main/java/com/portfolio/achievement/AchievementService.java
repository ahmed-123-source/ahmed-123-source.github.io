package com.portfolio.achievement;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AchievementService {
    private final AchievementRepository repo;

    public Achievement create(Achievement a){ a.setId(null); return repo.save(a);}    
    public Achievement update(Long id, Achievement a){
        Achievement existing = repo.findById(id).orElseThrow();
        existing.setTitle(a.getTitle());
        existing.setDescription(a.getDescription());
        existing.setDate(a.getDate());
        existing.setUrl(a.getUrl());
        return existing;
    }
    public List<Achievement> all(){ return repo.findAll(); }
    public Achievement get(Long id){ return repo.findById(id).orElseThrow(); }
    public void delete(Long id){ repo.deleteById(id);}    
}

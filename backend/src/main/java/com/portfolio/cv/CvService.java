package com.portfolio.cv;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CvService {
    private final CvDocumentRepository repo;

    public CvDocument create(CvDocument d){ d.setId(null); return repo.save(d);}    
    public List<CvDocument> all(){ return repo.findAll(); }
    public CvDocument latest(){ return repo.findAll().stream().reduce((first, second)-> second).orElse(null);} // naive
    public void delete(Long id){ repo.deleteById(id);}    
}

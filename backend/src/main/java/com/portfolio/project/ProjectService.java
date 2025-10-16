package com.portfolio.project;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final TechnologyRepository technologyRepository;

    @Transactional
    public Project create(Project p, List<String> techNames) {
        p.setId(null);
        p.setLastUpdated(LocalDate.now());
        p.setTechnologies(resolveTechnologies(techNames));
        return projectRepository.save(p);
    }

    public Page<Project> search(String q, Integer year, List<String> techNames, int page, int size) {
        Specification<Project> spec = Specification.where(ProjectSpecifications.nameContains(q))
                .and(ProjectSpecifications.yearEquals(year))
                .and(ProjectSpecifications.hasTechnologies(techNames));
        return projectRepository.findAll(spec, PageRequest.of(page, size));
    }

    @Transactional
    public Project update(Long id, Project updated, List<String> techNames) {
        Project existing = projectRepository.findById(id).orElseThrow();
        existing.setName(updated.getName());
        existing.setShortDescription(updated.getShortDescription());
        existing.setRichContent(updated.getRichContent());
        existing.setYear(updated.getYear());
        existing.setLastUpdated(LocalDate.now());
        if (techNames != null) {
            existing.setTechnologies(resolveTechnologies(techNames));
        }
        return existing;
    }

    public Project get(Long id) { return projectRepository.findById(id).orElseThrow(); }

    public void delete(Long id) { projectRepository.deleteById(id); }

    private List<Technology> resolveTechnologies(List<String> names) {
        if (names == null) return List.of();
        return names.stream().map(n -> technologyRepository.findByNameIgnoreCase(n)
                .orElseGet(() -> technologyRepository.save(Technology.builder().name(n).build()))).toList();
    }
}

package com.portfolio.project;

import com.portfolio.project.dto.ProjectDto;
import com.portfolio.project.dto.ProjectMapper;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService service;
    private final ProjectVideoRepository videoRepo;

    @GetMapping
    public Page<ProjectDto> search(@RequestParam(required = false) String q,
                                   @RequestParam(required = false) Integer year,
                                   @RequestParam(required = false) List<String> tech,
                                   @RequestParam(defaultValue = "0") @Min(0) int page,
                                   @RequestParam(defaultValue = "10") @Min(1) int size){
        return service.search(q, year, tech, page, size).map(ProjectMapper::toDto);
    }

    @GetMapping("/{id}")
    public ProjectDto get(@PathVariable Long id){ return ProjectMapper.toDto(service.get(id)); }

    @PostMapping
    public ProjectDto create(@RequestBody ProjectCreateRequest req){
        Project p = Project.builder()
                .name(req.name())
                .shortDescription(req.shortDescription())
                .richContent(req.richContent())
                .year(req.year())
                .build();
        return ProjectMapper.toDto(service.create(p, req.technologies()));
    }

    @PutMapping("/{id}")
    public ProjectDto update(@PathVariable Long id, @RequestBody ProjectCreateRequest req){
        Project p = Project.builder()
                .name(req.name())
                .shortDescription(req.shortDescription())
                .richContent(req.richContent())
                .year(req.year())
                .build();
        return ProjectMapper.toDto(service.update(id, p, req.technologies()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/videos")
    public List<ProjectVideo> videos(@PathVariable Long id){
        return videoRepo.findByProjectId(id);
    }

    public record ProjectCreateRequest(String name, String shortDescription, String richContent, Integer year, List<String> technologies){}
}

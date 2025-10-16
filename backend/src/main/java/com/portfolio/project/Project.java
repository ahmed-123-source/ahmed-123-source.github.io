package com.portfolio.project;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Project {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String shortDescription;

    @Lob
    private String richContent; // JSON or HTML from editor

    @Column(name = "project_year")
    private Integer year;

    private LocalDate lastUpdated;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "project_technology",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "technology_id"))
    private List<Technology> technologies = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProjectVideo> videos = new ArrayList<>();
}

package com.portfolio.project.dto;

import com.portfolio.project.Project;

import java.time.format.DateTimeFormatter;

public class ProjectMapper {
    private static final DateTimeFormatter F = DateTimeFormatter.ISO_DATE;
    public static ProjectDto toDto(Project p){
        return new ProjectDto(
                p.getId(),
                p.getName(),
                p.getShortDescription(),
                p.getRichContent(),
                p.getYear(),
                p.getLastUpdated() == null ? null : p.getLastUpdated().format(F),
                p.getTechnologies().stream().map(t-> t.getName()).toList()
        );
    }
}

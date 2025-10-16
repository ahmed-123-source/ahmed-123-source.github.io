package com.portfolio.project.dto;

import java.util.List;

public record ProjectDto(Long id, String name, String shortDescription, String richContent, Integer year, String lastUpdated, List<String> technologies) {}

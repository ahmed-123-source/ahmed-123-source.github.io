package com.portfolio.project;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectVideoRepository extends JpaRepository<ProjectVideo, Long> {
    List<ProjectVideo> findByProjectId(Long projectId);
}

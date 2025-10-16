package com.portfolio.project;

import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class ProjectSpecifications {
    public static Specification<Project> nameContains(String q) {
        return (root, query, cb) -> q == null || q.isBlank() ? null : cb.like(cb.lower(root.get("name")), "%" + q.toLowerCase() + "%");
    }
    public static Specification<Project> yearEquals(Integer year) {
        return (root, query, cb) -> year == null ? null : cb.equal(root.get("year"), year);
    }
    public static Specification<Project> hasTechnologies(List<String> techNames) {
        return (root, query, cb) -> {
            if (techNames == null || techNames.isEmpty()) return null;
            query.distinct(true);
            var join = root.join("technologies");
            return join.get("name").in(techNames);
        };
    }
}

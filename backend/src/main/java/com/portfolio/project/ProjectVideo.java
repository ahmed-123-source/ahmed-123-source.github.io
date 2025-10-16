package com.portfolio.project;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ProjectVideo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url; // Cloudinary (or other) URL

    @ManyToOne(fetch = FetchType.LAZY)
    private Project project;
}

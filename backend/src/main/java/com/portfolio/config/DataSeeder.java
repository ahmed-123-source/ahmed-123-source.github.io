package com.portfolio.config;

import com.portfolio.achievement.Achievement;
import com.portfolio.achievement.AchievementRepository;
import com.portfolio.cv.CvDocument;
import com.portfolio.cv.CvDocumentRepository;
import com.portfolio.event.ProfessionalEvent;
import com.portfolio.event.ProfessionalEventRepository;
import com.portfolio.project.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.time.LocalDate;
import java.util.List;

@Configuration
@Profile("dev")
public class DataSeeder {
        @Bean(name = "devDataSeed")
        CommandLineRunner seedDev(
            ProjectRepository projectRepo,
            TechnologyRepository techRepo,
            ProjectVideoRepository videoRepo,
            AchievementRepository achievementRepo,
            ProfessionalEventRepository eventRepo,
            CvDocumentRepository cvRepo
    ){
        return args -> {
            if (projectRepo.count() == 0) {
                Technology react = techRepo.save(Technology.builder().name("React").build());
                Technology spring = techRepo.save(Technology.builder().name("Spring Boot").build());
                Technology postgres = techRepo.save(Technology.builder().name("PostgreSQL").build());

                Project p1 = Project.builder()
                        .name("Portfolio Platform")
                        .shortDescription("A personal portfolio with projects, achievements, and events.")
                        .richContent("<p>Initial version with <strong>CRUD</strong>, search and filter.</p>")
                        .year(LocalDate.now().getYear())
                        .lastUpdated(LocalDate.now())
                        .technologies(List.of(react, spring, postgres))
                        .build();
                projectRepo.save(p1);
                videoRepo.save(ProjectVideo.builder()
                        .project(p1)
                        .title("Search Feature Demo")
                        .url("https://www.w3schools.com/html/mov_bbb.mp4")
                        .build());

                Project p2 = Project.builder()
                        .name("Mobile Health App")
                        .shortDescription("Kotlin + Firebase app for medical prediction.")
                        .richContent("<p>Added <em>risk prediction</em> algorithm and secure data handling.</p>")
                        .year(LocalDate.now().minusYears(1).getYear())
                        .lastUpdated(LocalDate.now())
                        .technologies(List.of())
                        .build();
                projectRepo.save(p2);
            }

            if (achievementRepo.count() == 0) {
                achievementRepo.save(Achievement.builder()
                        .title("Business-Proficient English")
                        .description("<p>Completed Saylor Academy ESL005.</p>")
                        .date(LocalDate.now().minusMonths(6))
                        .url(null)
                        .build());
                achievementRepo.save(Achievement.builder()
                        .title("Messenger ChatBot Certificate")
                        .description("<p>Built a chatbot and passed the course.</p>")
                        .date(LocalDate.now().minusYears(1))
                        .url(null)
                        .build());
            }

            if (eventRepo.count() == 0) {
                eventRepo.save(ProfessionalEvent.builder()
                        .name("Tech Meetup")
                        .date(LocalDate.now().minusMonths(2))
                        .location("Tunis, Tunisia")
                        .description("<p>Presented a talk on Spring + React deployments.</p>")
                        .url(null)
                        .build());
            }

            if (cvRepo.count() == 0) {
                // Point to static frontend PDF path (place your compiled PDF at frontend/public/cv/cv.pdf)
                cvRepo.save(CvDocument.builder()
                        .fileName("Ahmed_Charfeddine_CV.pdf")
                        .fileUrl("http://localhost:3003/cv/cv.pdf")
                        .contentType("application/pdf")
                        .sizeBytes(0L)
                        .build());
            }
        };
    }
}

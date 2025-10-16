// package com.portfolio.config;
//
// import com.portfolio.achievement.Achievement;
// import com.portfolio.achievement.AchievementRepository;
// import com.portfolio.cv.CvDocument;
// import com.portfolio.cv.CvDocumentRepository;
// import com.portfolio.event.ProfessionalEvent;
// import com.portfolio.event.ProfessionalEventRepository;
// import com.portfolio.project.Project;
// import com.portfolio.project.ProjectRepository;
// import com.portfolio.project.ProjectService;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Profile;
//
// import java.time.LocalDate;
// import java.util.List;
//
// @Configuration
// @Profile("dev")
// public class DevDataInitializer {
//     @Bean
//     CommandLineRunner seed(ProjectService projectService,
//                            AchievementRepository achRepo,
//                            ProfessionalEventRepository eventRepo,
//                            CvDocumentRepository cvRepo){
//         return args -> {
//             if (projectService.search(null, null, null, 0, 1).getTotalElements()==0){
//                 var p = Project.builder()
//                         .name("Portfolio Platform")
//                         .shortDescription("Personal portfolio with CRUD and search")
//                         .richContent("<p>Initial content with <strong>rich text</strong>.</p>
//                         .year(LocalDate.now().getYear())
//                         .build();
//                 projectService.create(p, List.of("Spring Boot", "React"));
//             }
//             if (achRepo.count() == 0){
//                 achRepo.save(Achievement.builder().title("Hackathon Winner").description("<p>Won first place</p>").date(LocalDate.now().minusDays(30)).build());
//             }
//             if (eventRepo.count() == 0){
//                 eventRepo.save(ProfessionalEvent.builder().name("Tech Conf").date(LocalDate.now().minusDays(10)).location("Tunis").description("<p>Spoke about APIs</p>").build());
//             }
//             if (cvRepo.count() == 0){
//                 cvRepo.save(CvDocument.builder().fileName("cv.pdf").fileUrl("https://example.com/cv.pdf").contentType("application/pdf").sizeBytes(123456L).build());
//             }
//         };
//     }
// }

package com.portfolio.contact;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<Void> send(@RequestBody ContactMessage message) {
        contactService.send(message);
        return ResponseEntity.accepted().build();
    }
}

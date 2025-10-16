package com.portfolio.contact;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class ContactService {
    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final JavaMailSender mailSender;

    @Value("${app.contact.to:dev@example.com}")
    private String toAddress;

    @Value("${app.mail.enabled:true}")
    private boolean mailEnabled;

    @Value("${app.mail.from:}")
    private String fromAddress;

    public ContactService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void send(ContactMessage msg) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(toAddress);
        if (fromAddress != null && !fromAddress.isBlank()) {
            mail.setFrom(fromAddress);
        }
        mail.setReplyTo(msg.email());
        mail.setSubject("Portfolio Contact: " + msg.name());
        mail.setText("From: " + msg.name() + " <" + msg.email() + ">\n\n" + msg.message());

        if (!mailEnabled) {
            // Dev mode: don't actually send; log instead so endpoint succeeds
        log.info("[DEV] Skipping email send. Would send from '{}' to {} with subject '{}'",
            mail.getFrom(), (Object) mail.getTo(), mail.getSubject());
            return;
        }

        try {
            mailSender.send(mail);
        } catch (MailException ex) {
            log.error("Failed to send contact email: {}", ex.getMessage());
            throw ex;
        }
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ticket.ticketRaiseSystem.controller;

import com.ticket.ticketRaiseSystem.model.TicketModel;
import com.ticket.ticketRaiseSystem.services.TicketService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author abhishekanand
 */
@RestController
@RequestMapping("/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketBO;

//    @Autowired
//    private FileStorageService fileStorageService;
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Rest teicket Project";
    }

 

    @PostMapping(value = "/create")
    public ResponseEntity<?> createTicket(@RequestBody TicketModel ticketData) throws IOException {
        List<String> filePaths = new ArrayList<>();

        if (ticketData.getCategory() == null || ticketData.getCategory().isEmpty()) {
        return ResponseEntity.badRequest().body("Category is required and cannot be null or empty.");
    }
    if (ticketData.getSubject() == null || ticketData.getSubject().isEmpty()) {
        return ResponseEntity.badRequest().body("Subject is required and cannot be null or empty.");
    }
    if (ticketData.getDescription() == null || ticketData.getDescription().isEmpty()) {
        return ResponseEntity.badRequest().body("Description is required and cannot be null or empty.");
    }
    if (ticketData.getUserId() == null) {
        return ResponseEntity.badRequest().body("User ID is required and cannot be null.");
    }
        TicketModel savedTicket = ticketBO.saveTicket(ticketData);

        return ResponseEntity.ok(savedTicket);
    }

    @GetMapping("/all/{id}")
    public List<TicketModel> getAllTickets(@PathVariable Long id) {
        return ticketBO.getTicketsByUserId(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TicketModel> getTicketById(@PathVariable Long id) {
        return ticketBO.getTicketById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

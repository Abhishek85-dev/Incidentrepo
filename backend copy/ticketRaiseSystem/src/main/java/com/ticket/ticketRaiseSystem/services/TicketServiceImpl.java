/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ticket.ticketRaiseSystem.services;

import com.ticket.ticketRaiseSystem.dao.TicketRepository;
import com.ticket.ticketRaiseSystem.model.TicketModel;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author abhishekanand
 */

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public TicketModel saveTicket(TicketModel ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public List<TicketModel> getTicketsByUserId(Long userId) {
        return ticketRepository.findByUserId(userId);
    }

    @Override
    public Optional<TicketModel> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.ticket.ticketRaiseSystem.services;

import com.ticket.ticketRaiseSystem.model.TicketModel;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author abhishekanand
 */
public interface TicketService {

    public TicketModel saveTicket(TicketModel ticket);

    public List<TicketModel> getTicketsByUserId(Long userId);

    public Optional<TicketModel> getTicketById(Long id);

}

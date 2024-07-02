/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.ticket.ticketRaiseSystem.dao;

/**
 *
 * @author abhishekanand
 */
import com.ticket.ticketRaiseSystem.model.TicketModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<TicketModel, Long> {

    List<TicketModel> findByUserId(Long userId);
}

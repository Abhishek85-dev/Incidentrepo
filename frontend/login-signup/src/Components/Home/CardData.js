import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ConfirmationNumber from "@mui/icons-material/ConfirmationNumber";
import Flag from "@mui/icons-material/Flag";
import TicketCard from "./TicketCard";
import axios from "axios"; // Assuming you're using axios for API calls
import { Link } from 'react-router-dom';


const CardData = () => {
  const [ticketData, setTicketData] = useState({
    total: "90",
    open: 30,
    closed: 60,
    highPriority: 10,
    mediumPriority: 30,
    lowPriority: 20,
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("/api/ticket-stats")
      .then((response) => {
        setTicketData(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch ticket data. Please try again later.");
        console.error("Error fetching ticket data:", err);
      });
  }, []);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <TicketCard title="Total Tickets" count={ticketData.total} icon={<ConfirmationNumber />} />
      <TicketCard title="Open Tickets" count={ticketData.open} icon={<ConfirmationNumber />} />
      <TicketCard title="Closed Tickets" count={ticketData.closed} icon={<ConfirmationNumber />} />
      <TicketCard title="High Priority" count={ticketData.highPriority} icon={<Flag />} />
      <TicketCard title="Medium Priority" count={ticketData.mediumPriority} icon={<Flag />} />
      <TicketCard title="Low Priority" count={ticketData.lowPriority} icon={<Flag />} />
    </Box>
  );
};

export default CardData;

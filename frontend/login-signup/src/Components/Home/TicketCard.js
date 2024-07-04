import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import "./Dashboard.css";
import { Link } from 'react-router-dom';


const TicketCard = ({ title, count, icon }) => {
  return (
    <Card
      className="tCardGradient"
      sx={{
        display: "flex",
        width: 200,
        height: 200,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 3,
        marginTop: 1,
        marginLeft: 2.5,
        borderRadius: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <CardContent sx={{ flex: "1 0 auto", textAlign: "center" }}>
          <Typography component="div" variant="h6" color="black" fontWeight="550">
            {title}
          </Typography>
          <Typography variant="h4" color="text.secondary" component="div">
            {count}
          </Typography>
        </CardContent>
        {icon && (
          <Box sx={{ mt: -2 }}>
            {React.cloneElement(icon, { sx: { fontSize: 35, display: { xs: "none", md: "flex" } } })}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default TicketCard;

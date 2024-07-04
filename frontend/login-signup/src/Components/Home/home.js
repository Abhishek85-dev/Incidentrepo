import  React, { useState, useEffect, useRef } from "react";
import "./Dashboard.css";
import Card from "@mui/material/Card";
import CardData from "./CardData";
import Header from "./Header";
import RecentTickets from "./RecentTickets";
import { Link } from 'react-router-dom';


const pages = ["Home", "Register Ticket"];
const settings = ["Update Profile", "Logout"];

function Home() {


  return (
    <>
    {<Header/>}
   
     <Card className="tCardContainer" sx={{
          display: "flex",
          maxWidth: 1380, // Set a fixed width
          height: 250, // Set a fixed height to make it square
          flexDirection: "column", // Arrange items in column direction
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
          //   padding: 2, // Add padding for inner spacing
          boxShadow: 3, // Optional: Adjust box shadow for better visual
          marginTop: 3,
          marginLeft: 3,
          borderRadius: 3,
        }}>

    
     { <CardData/>}
     </Card>            
       
        {<RecentTickets/>}
          
       
     
    </>
  );
}
export default Home;

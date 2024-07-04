import  React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SupportAgent from "@mui/icons-material/SupportAgent";
import "./Dashboard.css";
import pic1 from "../Assets/customer01.jpg";
import { useTheme } from "@mui/material/styles";
import { Link } from 'react-router-dom';



const pages = ["Home", "Register Ticket"];
const settings = ["Update Profile", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();

  const [ticketData, setTicketData] = useState({
    total: 0,
    open: 0,
    closed: 0,
    highPriority: 0,
    mediumPriority: 0,
    lowPriority: 0,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 
  
  const handleMenuItemClick = (setting) => {
   // handleCloseUserMenu();
    if (setting === "Update Profile") {
     <Link className="list-group-item list-group-item-action" target="a" to="/update" action> Update Profile</Link>

    } else if (setting === "Logout") {
      <Link className="list-group-item list-group-item-action" target="a" to="/" action> setting </Link>

    }
  };

  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SupportAgent
              sx={{ fontSize: 50, display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 40,
                display: { xs: "none", md: "flex" },
                fontFamily: "roman",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link className="list-group-item list-group-item-action" target="a" to={"/home"} action>  PWC Helpdesk</Link>
            
            </Typography>
            {/* ------------------------------------------------------------------------------ */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    <Link className="list-group-item list-group-item-action" target="a" key={page} to={page === "Home" ? "/home" : "/register"}>
                    {page}</Link></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* ------------------------------------------------------------------------------ */}

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "roman",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link className="list-group-item list-group-item-action" target="a" to={"/home"} action>  pWC Helpdesk</Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)", // Box shadow on hover
                      zIndex: 2, // Increase z-index on hover if needed
                    },
                  }}
                >
                   <Typography textAlign="center">
                    <Link className="list-group-item list-group-item-action" target="a" key={page} to={page === "Home" ? "/home" : "/register"}>
                    {page}</Link></Typography>
                </Button>
              ))}
            </Box>
            <Typography
             
              sx={{
                mr: 2,
                
                fontFamily: "roman",
                fontWeight: 600,
                // letterSpacing: ".3rem",
                fontSize:"12px",
                color: "white",
                marginTop:"15px",
                textDecoration: "none",
              }}
            >
            <p style={{ textAlign: 'right' }}>Hi,Abhishek Anand</p>
           
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={pic1} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                 
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                    <Link className="list-group-item list-group-item-action" target="a" key={setting} to={setting === "Update Profile" ? "/update" : "/"}>
                    {setting}</Link></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
     
    </>
  );
}
export default Header;

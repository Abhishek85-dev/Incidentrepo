import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./LoginSignUp.css";
import Home from "../Home/home";


const LoginSignUp = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState("");

  const handleToggle = () => {
    setIsActive(!isActive);
    setSelectedProfile("");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // -----------------------------------------------------------------------
  const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/userregistration/save", {
          name: name,
          email: email,
          password: password,
          profile:"profile"
          });
          alert("User Registation Successfully");
        } catch (err) {
          alert(err);
        }
      }

      const [emailLogin, setLoginEmail] = useState("");
    const [passwordLogin, setLoginPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/login/logging", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
        catch (err) {
          alert(err);
        }
      
      }

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* ----------------------------------------------------------------------------- */}
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <span>use your email for registration</span>
          <input type="text" placeholder="Name" 
            value={name}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input type="email" placeholder="Email" 
          
           
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
          <input type="password" placeholder="Password" 
          
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          />

          <div className="dropdown-container" ref={dropdownRef}>
            <div
              className={`select-profile ${isOpen ? "open" : ""}`}
              onClick={toggleDropdown}
              tabIndex="0"
            >
              <div className="current-profile">
                {selectedProfile || "Select Profile"}
              </div>
              <div className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</div>{" "}
              <div className="dropdown">
                <div
                  className="dropdown-option"
                  onClick={() => handleProfileSelect("HR")}
                >
                  HR
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => handleProfileSelect("Developer")}
                >
                  Developer
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => handleProfileSelect("Finance")}
                >
                  Finance
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => handleProfileSelect("Business")}
                >
                  Business
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => handleProfileSelect("Analyst")}
                >
                  Analyst
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={save}>Sign Up</button>
        </form>
      </div>

      {/* --------------------------------------------------------------------------------- */}

      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon1">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon2">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/oauth2/authorization/github" className="icon3">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon4">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your email for login</span>
          <input type="email" placeholder="Email"   value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}/>
          <input type="password" placeholder="Password"  
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}/>
          <a href="#" className="Forgot-password">
            Forgot Your Password?
          </a>
          <button type="button" onClick={login}>Sign In</button>
        </form>
      </div>

      {/* --------------------------------------------------------------------------- */}

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome!</h1>
            <p>Enter your personal details and Sign Up to log Ticket</p>
            <button className="hidden" id="login" onClick={handleToggle}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Facing Problem?</h1>
            <p>Register with your personal details to raise incidents</p>
            <button className="hidden" id="register" onClick={handleToggle}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default LoginSignUp;

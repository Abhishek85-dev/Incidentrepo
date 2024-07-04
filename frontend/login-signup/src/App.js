import logo from './logo.svg';
import './App.css';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home/home";
import UpdateProfile from "./Components/UpdateData/UpdateProfile";

import RegisterTicketForm from "./Components/RegisterTicket/RegisterTicketForm";
 
function App() {
  return (
    <div >
     
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/update" element= { <UpdateProfile/>} />
              <Route path="/register" element= { <RegisterTicketForm/>} />

              <Route path="/" element= {  <LoginSignUp/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

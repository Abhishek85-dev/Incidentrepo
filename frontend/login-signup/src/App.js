import logo from './logo.svg';
import './App.css';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home/home";

 
function App() {
  return (
    <div >
     
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
         
              <Route path="/" element= {  <LoginSignUp/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

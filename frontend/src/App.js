import "./styles/App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import Chat from "./pages/chat";
import Community from "./pages/community";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="app">
    <Router basename='/'>
      <Navbar/>
      <Footer/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      
    </Router>
    
    </div>
    
  );
}


export default App;
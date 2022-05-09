import "./styles/App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import Chat from "./pages/chat";
import Community from "./pages/community";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/library" component={Library}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/community" component={Community}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </Routes>
    </Router>
  );
}

export default App;
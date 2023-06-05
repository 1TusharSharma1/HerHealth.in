import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Page0 from "./Components/Page0";
// import Card1 from "./Components/Card1";
import Footer from './Components/Footer';
// import FAQs from './Components/FAQ';
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={ <Home/>} />
        {/* <Route path="/card1" element={<Card1 />} />
        <Route path="/faq" element={<FAQs />} /> */}
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

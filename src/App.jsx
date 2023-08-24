import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

//components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

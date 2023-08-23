import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

//components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

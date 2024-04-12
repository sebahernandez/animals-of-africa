import { NavbarMenu } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Favorites from "./views/Favorites";

function App() {
  return (
    <>
      <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CartDrawer from "./Components/Global/CartDrawer";
import Navbar from "./Components/Global/Navbar";
import Home from "./Components/Pages/Home";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <CartDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default App;

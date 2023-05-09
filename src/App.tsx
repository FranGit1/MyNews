import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { NewsContextProvider } from "./context/NewsContextProvider";
import General from "./components/General";
import Business from "./components/Business";
import Health from "./components/Health";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="general" element={<General />} />
        <Route path="business" element={<Business />} />
        <Route path="health" element={<Health />} />
        <Route path="science" element={<Science />} />
        <Route path="sports" element={<Sports />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    </Routes>
  );
}

export default App;

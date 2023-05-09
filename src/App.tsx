import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import General from "./components/General";
import Business from "./components/Business";
import Health from "./components/Health";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import { OfferContextProvider } from "./context/OfferContextProvider";
import SearchNews from "./components/SearchNews";

function App() {
  return (
    <OfferContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="general" element={<General />} />
          <Route path="business" element={<Business />} />
          <Route path="health" element={<Health />} />
          <Route path="science" element={<Science />} />
          <Route path="sports" element={<Sports />} />
          <Route path="technology" element={<Technology />} />
          <Route path="search/:query" element={<SearchNews />} />
        </Route>
      </Routes>
    </OfferContextProvider>
  );
}

export default App;

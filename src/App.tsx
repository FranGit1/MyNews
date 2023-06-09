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
import Latest from "./components/Latest";
import LatestNewsContextProvider from "./context/LatestNewsContextProvider";
import MenuContextProvider from "./context/MenuContextProvider";
import FavouriteArticles from "./components/FavouriteArticles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NewsContextProvider } from "./context/NewsContextProvider";

function App() {
  return (
    <OfferContextProvider>
      <LatestNewsContextProvider>
        <MenuContextProvider>
          <ToastContainer />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="general" element={<General />} />
              <Route path="business" element={<Business />} />
              <Route path="health" element={<Health />} />
              <Route path="science" element={<Science />} />
              <Route path="sports" element={<Sports />} />
              <Route path="technology" element={<Technology />} />
              <Route
                path="latest"
                element={
                  <NewsContextProvider>
                    <Latest />
                  </NewsContextProvider>
                }
              />

              <Route path="favourite" element={<FavouriteArticles />} />
              <Route path="search/:query" element={<SearchNews />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </LatestNewsContextProvider>
    </OfferContextProvider>
  );
}

export default App;

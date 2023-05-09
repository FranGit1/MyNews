import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { OfferContext } from "../context/OfferContextProvider";
import Offer from "./Offer";
interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  const { showOffer } = useContext(OfferContext);

  return (
    <main className="App">
      {showOffer && <Offer />}

      <Outlet />
    </main>
  );
};
export default Layout;

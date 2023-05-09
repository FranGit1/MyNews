import React from "react";
import { Outlet } from "react-router-dom";
import Offer from "./offer";
interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <main className="App">
      <Offer />
      <Outlet />
    </main>
  );
};
export default Layout;

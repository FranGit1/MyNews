import React from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <main className="App">
      Navbar
      <Outlet />
    </main>
  );
};
export default Layout;

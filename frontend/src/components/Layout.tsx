
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-purple-800">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

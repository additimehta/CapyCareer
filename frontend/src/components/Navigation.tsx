
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Briefcase, BarChart3, Building2, User, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { name: "Applications", path: "/applications", icon: Briefcase },
    { name: "Companies", path: "/companies", icon: Building2 },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <nav className="bg-capy p-4 text-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bb764ac4-e846-4fc0-a1d2-c9d49a7fb6db.png" 
              alt="CapyCareer Logo" 
              className="h-10 w-10" 
            />
            <span className="text-xl font-bold">CapyCareer</span>
          </Link>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center space-x-1 hover:text-capy-lightest transition-colors",
                location.pathname === item.path ? "font-semibold text-capy-lightest" : ""
              )}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

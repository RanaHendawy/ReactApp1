
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-1 pt-16 ${isHomePage ? 'home-page' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

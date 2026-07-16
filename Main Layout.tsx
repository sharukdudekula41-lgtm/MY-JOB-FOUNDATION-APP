import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { pathname } = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
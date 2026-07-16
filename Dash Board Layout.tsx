import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  Bell,
  Search,
  User,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../hooks/useAuth";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-slate-100 dark:bg-slate-950">

        {/* Desktop Sidebar */}

        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}

        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() =>
                setSidebarOpen(false)
              }
            />

            <div className="fixed left-0 top-0 z-50 lg:hidden">
              <Sidebar />
            </div>
          </>
        )}

        {/* Main Content */}

        <div className="flex-1 flex flex-col">

          {/* Header */}

          <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700 px-6 py-4">

            <div className="flex items-center justify-between">

              {/* Left */}

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setSidebarOpen(true)
                  }
                  className="lg:hidden"
                >
                  <Menu size={26} />
                </button>

                <div className="relative hidden md:block">

                  <Search
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 w-72"
                  />

                </div>

              </div>

              {/* Right */}

              <div className="flex items-center gap-5">

                <ThemeToggle />

                <button className="relative">

                  <Bell size={22} />

                  <span className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center">
                    3
                  </span>

                </button>

                <div className="flex items-center gap-3">

                  {user?.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">

                      <User
                        className="text-blue-600"
                        size={20}
                      />

                    </div>
                  )}

                  <div className="hidden sm:block">

                    <h4 className="font-semibold">
                      {user?.name ?? "Guest"}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {user?.email}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </header>

          {/* Dashboard Content */}

          <main className="flex-1 p-6 overflow-auto">

            <Outlet />

          </main>

        </div>

      </div>
    </ProtectedRoute>
  );
}
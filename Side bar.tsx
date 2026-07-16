import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  User,
  FileText,
  Bookmark,
  Briefcase,
  FilePlus,
  Trophy,
  ClipboardCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/dashboard/profile",
    },
    {
      name: "Resume Builder",
      icon: <FileText size={20} />,
      path: "/dashboard/resume-builder",
    },
    {
      name: "Cover Letter",
      icon: <FilePlus size={20} />,
      path: "/dashboard/cover-letter",
    },
    {
      name: "Saved Jobs",
      icon: <Bookmark size={20} />,
      path: "/dashboard/saved-jobs",
    },
    {
      name: "Applications",
      icon: <Briefcase size={20} />,
      path: "/dashboard/applications",
    },
    {
      name: "Mock Interviews",
      icon: <ClipboardCheck size={20} />,
      path: "/mock-interviews",
    },
    {
      name: "Mock Tests",
      icon: <FileText size={20} />,
      path: "/mock-tests",
    },
    {
      name: "Competitions",
      icon: <Trophy size={20} />,
      path: "/competitions",
    },
    {
      name: "Companies",
      icon: <Building2 size={20} />,
      path: "/companies",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={`h-screen bg-white dark:bg-slate-900 border-r dark:border-slate-700 shadow-md transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Header */}

      <div className="flex items-center justify-between p-5 border-b dark:border-slate-700">

        {!collapsed && (
          <h2 className="text-xl font-bold text-blue-600">
            Dashboard
          </h2>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>

      </div>

      {/* Navigation */}

      <nav className="mt-5 flex flex-col gap-2 px-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`
            }
          >
            {item.icon}

            {!collapsed && (
              <span className="font-medium">
                {item.name}
              </span>
            )}
          </NavLink>
        ))}

      </nav>

      {/* Footer */}

      <div className="absolute bottom-5 left-0 w-full px-3">

        <button
          onClick={handleLogout}
          className="flex items-center gap-4 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
        >
          <LogOut size={20} />

          {!collapsed && (
            <span className="font-medium">
              Logout
            </span>
          )}

        </button>

      </div>
    </aside>
  );
}
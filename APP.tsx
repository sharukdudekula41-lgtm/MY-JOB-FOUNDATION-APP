import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import MockInterviews from "./pages/MockInterviews";
import MockTests from "./pages/MockTests";
import Competitions from "./pages/Competitions";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ResumeBuilder from "./pages/ResumeBuilder";
import CoverLetter from "./pages/CoverLetter";
import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        {/* ---------------- Public Layout ---------------- */}

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />

          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />

          <Route path="/mock-interviews" element={<MockInterviews />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/competitions" element={<Competitions />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Route>

        {/* ---------------- Protected Dashboard ---------------- */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resume-builder" element={<ResumeBuilder />} />
          <Route path="cover-letter" element={<CoverLetter />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="applications" element={<Applications />} />
        </Route>

        {/* ---------------- Redirect ---------------- */}

        <Route
          path="/profile"
          element={<Navigate to="/dashboard/profile" replace />}
        />

        {/* ---------------- 404 ---------------- */}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}
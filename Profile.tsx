import { Link } from "react-router-dom";
import {
  Briefcase,
  Bookmark,
  FileText,
  Building2,
  Trophy,
  Brain,
  User,
  Bell,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Applied Jobs",
      value: 28,
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      title: "Saved Jobs",
      value: 15,
      icon: <Bookmark className="w-8 h-8 text-green-600" />,
      color: "bg-green-100",
    },
    {
      title: "Resume Views",
      value: 120,
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-100",
    },
    {
      title: "Interviews",
      value: 6,
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      color: "bg-pink-100",
    },
  ];

  const recentApplications = [
    {
      company: "Google",
      role: "Frontend Developer",
      status: "Interview Scheduled",
    },
    {
      company: "Microsoft",
      role: "React Developer",
      status: "Under Review",
    },
    {
      company: "Amazon",
      role: "Backend Developer",
      status: "Applied",
    },
    {
      company: "Adobe",
      role: "UI Developer",
      status: "Shortlisted",
    },
  ];

  const quickLinks = [
    {
      title: "Browse Jobs",
      icon: <Briefcase size={24} />,
      link: "/jobs",
    },
    {
      title: "Companies",
      icon: <Building2 size={24} />,
      link: "/companies",
    },
    {
      title: "Resume Builder",
      icon: <FileText size={24} />,
      link: "/resume-builder",
    },
    {
      title: "Mock Interviews",
      icon: <Brain size={24} />,
      link: "/mock-interviews",
    },
    {
      title: "Competitions",
      icon: <Trophy size={24} />,
      link: "/competitions",
    },
    {
      title: "Profile",
      icon: <User size={24} />,
      link: "/profile",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Welcome */}

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Track your job applications and career progress.
          </p>
        </div>

        <button className="relative p-3 rounded-full bg-white dark:bg-slate-900 shadow">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2">
            3
          </span>
        </button>

      </div>

      {/* Statistics */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6"
          >
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold mt-5">
              {item.value}
            </h2>

            <p className="text-gray-500 mt-2">
              {item.title}
            </p>
          </div>
        ))}

      </div>

      {/* Quick Links */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-6">
          Quick Access
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition flex items-center gap-5"
            >
              <div className="text-blue-600">
                {item.icon}
              </div>

              <span className="font-semibold text-lg">
                {item.title}
              </span>
            </Link>
          ))}

        </div>

      </div>

      {/* Recent Applications */}

      <div className="mt-14 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">

        <h2 className="text-3xl font-bold mb-6">
          Recent Applications
        </h2>

        <div className="space-y-5">

          {recentApplications.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center border-b pb-5"
            >
              <div>

                <h3 className="text-xl font-semibold">
                  {job.role}
                </h3>

                <p className="text-gray-500">
                  {job.company}
                </p>

              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full mt-4 md:mt-0">
                {job.status}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* Career Progress */}

      <div className="mt-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white">

        <div className="flex items-center gap-4">

          <TrendingUp size={45} />

          <div>

            <h2 className="text-4xl font-bold">
              Career Progress
            </h2>

            <p className="mt-2 text-blue-100">
              Your profile is 85% complete.
            </p>

          </div>

        </div>

        <div className="w-full bg-white/20 rounded-full h-4 mt-8">

          <div
            className="bg-white h-4 rounded-full"
            style={{ width: "85%" }}
          />

        </div>

        <p className="mt-6">
          Complete your profile to improve your chances of getting hired.
        </p>

      </div>

    </div>
  );
}
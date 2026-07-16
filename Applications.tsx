import { useState } from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Eye,
} from "lucide-react";

interface Application {
  id: number;
  company: string;
  position: string;
  appliedDate: string;
  status: "Applied" | "Under Review" | "Interview" | "Rejected" | "Selected";
  location: string;
}

export default function Applications() {
  const [search, setSearch] = useState("");

  const applications: Application[] = [
    {
      id: 1,
      company: "Google",
      position: "Frontend Developer",
      appliedDate: "12 Jul 2026",
      status: "Interview",
      location: "Bangalore",
    },
    {
      id: 2,
      company: "Microsoft",
      position: "React Developer",
      appliedDate: "10 Jul 2026",
      status: "Under Review",
      location: "Hyderabad",
    },
    {
      id: 3,
      company: "Amazon",
      position: "Backend Developer",
      appliedDate: "08 Jul 2026",
      status: "Applied",
      location: "Chennai",
    },
    {
      id: 4,
      company: "Adobe",
      position: "UI Developer",
      appliedDate: "05 Jul 2026",
      status: "Selected",
      location: "Noida",
    },
    {
      id: 5,
      company: "Oracle",
      position: "Java Developer",
      appliedDate: "01 Jul 2026",
      status: "Rejected",
      location: "Pune",
    },
  ];

  const filteredApplications = applications.filter(
    (item) =>
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.position.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-700";
      case "Under Review":
        return "bg-yellow-100 text-yellow-700";
      case "Interview":
        return "bg-purple-100 text-purple-700";
      case "Selected":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Applied":
        return <Clock size={18} />;
      case "Under Review":
        return <Eye size={18} />;
      case "Interview":
        return <Calendar size={18} />;
      case "Selected":
        return <CheckCircle size={18} />;
      case "Rejected":
        return <XCircle size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            My Applications
          </h1>

          <p className="text-gray-500 mt-2">
            Track all your job applications in one place.
          </p>
        </div>

        <Briefcase className="text-blue-600" size={45} />

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          className="absolute left-4 top-4 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search company or position..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
        />

      </div>

      {/* Applications */}

      <div className="space-y-6">

        {filteredApplications.map((item) => (

          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6"
          >

            <div className="flex flex-col lg:flex-row justify-between items-start">

              <div>

                <h2 className="text-2xl font-bold">
                  {item.position}
                </h2>

                <div className="mt-4 space-y-2 text-gray-600">

                  <div className="flex items-center gap-2">
                    <Building2 size={18} />
                    {item.company}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {item.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    Applied on {item.appliedDate}
                  </div>

                </div>

              </div>

              <div className="mt-6 lg:mt-0">

                <span
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium ${getStatusColor(
                    item.status
                  )}`}
                >
                  {getStatusIcon(item.status)}
                  {item.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
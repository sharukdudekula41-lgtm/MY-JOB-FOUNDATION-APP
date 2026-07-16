import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  MapPin,
  Building2,
  DollarSign,
  Briefcase,
  Trash2,
  Search,
} from "lucide-react";

interface SavedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  type: string;
  posted: string;
}

export default function SavedJobs() {
  const [jobs, setJobs] = useState<SavedJob[]>([
    {
      id: 1,
      title: "React Developer",
      company: "Google",
      location: "Bangalore",
      salary: "₹12 LPA",
      experience: "2+ Years",
      type: "Full Time",
      posted: "2 Days Ago",
    },
    {
      id: 2,
      title: "Python Full Stack Developer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: "₹10 LPA",
      experience: "Fresher",
      type: "Full Time",
      posted: "Today",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Amazon",
      location: "Chennai",
      salary: "₹15 LPA",
      experience: "3+ Years",
      type: "Remote",
      posted: "Yesterday",
    },
  ]);

  const [search, setSearch] = useState("");

  const removeJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Saved Jobs
          </h1>

          <p className="text-gray-500 mt-2">
            Jobs you've bookmarked for later.
          </p>
        </div>

        <Bookmark className="text-blue-600" size={45} />

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={20}
          className="absolute left-4 top-4 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search saved jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
        />

      </div>

      {/* Empty State */}

      {filteredJobs.length === 0 && (

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-12 text-center">

          <Bookmark
            size={70}
            className="mx-auto text-gray-400"
          />

          <h2 className="text-2xl font-bold mt-6">
            No Saved Jobs
          </h2>

          <p className="text-gray-500 mt-3">
            Start saving interesting jobs to apply later.
          </p>

          <Link
            to="/jobs"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Browse Jobs
          </Link>

        </div>

      )}

      {/* Job Cards */}

      <div className="space-y-6">

        {filteredJobs.map((job) => (

          <div
            key={job.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6"
          >

            <div className="flex flex-col lg:flex-row justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {job.title}
                </h2>

                <div className="space-y-2 mt-4 text-gray-600">

                  <div className="flex items-center gap-2">
                    <Building2 size={18} />
                    {job.company}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign size={18} />
                    {job.salary}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {job.experience}
                  </div>

                </div>

                <div className="mt-5">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {job.type}
                  </span>

                  <span className="ml-4 text-gray-500">
                    {job.posted}
                  </span>

                </div>

              </div>

              <div className="flex flex-col gap-4 mt-6 lg:mt-0">

                <Link
                  to={`/jobs/${job.id}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center hover:bg-blue-700"
                >
                  View Details
                </Link>

                <button
                  onClick={() => removeJob(job.id)}
                  className="bg-red-500 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600"
                >
                  <Trash2 size={18} />
                  Remove
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
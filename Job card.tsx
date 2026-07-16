import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  IndianRupee,
  Bookmark,
  Briefcase,
  Building2,
} from "lucide-react";
import { useState } from "react";

export interface JobCardProps {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  experience: string;
  salary: string;
  jobType: string;
  skills: string[];
  postedAt: string;
  featured?: boolean;
  saved?: boolean;
  onSave?: (id: number) => void;
}

export default function JobCard({
  id,
  title,
  company,
  companyLogo,
  location,
  experience,
  salary,
  jobType,
  skills,
  postedAt,
  featured = false,
  saved = false,
  onSave,
}: JobCardProps) {
  const [isSaved, setIsSaved] = useState(saved);

  const handleSave = () => {
    setIsSaved(!isSaved);

    if (onSave) {
      onSave(id);
    }
  };

  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl shadow-md border transition-all hover:shadow-xl hover:-translate-y-1 ${
        featured ? "border-blue-500" : "border-gray-200 dark:border-slate-700"
      }`}
    >
      {featured && (
        <div className="bg-blue-600 text-white text-xs px-4 py-1 rounded-t-2xl font-semibold">
          ⭐ Featured Job
        </div>
      )}

      <div className="p-6">

        {/* Header */}

        <div className="flex justify-between items-start">

          <div className="flex gap-4">

            {companyLogo ? (
              <img
                src={companyLogo}
                alt={company}
                className="w-14 h-14 rounded-xl object-cover border"
              />
            ) : (
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <Building2 className="text-blue-600" />
              </div>
            )}

            <div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>

              <p className="text-gray-500 mt-1">
                {company}
              </p>

            </div>

          </div>

          <button
            onClick={handleSave}
            className={`transition ${
              isSaved
                ? "text-blue-600"
                : "text-gray-400 hover:text-blue-600"
            }`}
          >
            <Bookmark
              size={22}
              fill={isSaved ? "currentColor" : "none"}
            />
          </button>

        </div>

        {/* Details */}

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin size={16} />
            {location}
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Briefcase size={16} />
            {experience}
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <IndianRupee size={16} />
            {salary}
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Clock size={16} />
            {postedAt}
          </div>

        </div>

        {/* Job Type */}

        <div className="mt-5">

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            {jobType}
          </span>

        </div>

        {/* Skills */}

        <div className="flex flex-wrap gap-2 mt-5">

          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-slate-100 dark:bg-slate-800 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="flex justify-between items-center mt-7">

          <Link
            to={`/jobs/${id}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            View Details
          </Link>

          <Link
            to={`/jobs/${id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Apply Now
          </Link>

        </div>

      </div>
    </div>
  );
}
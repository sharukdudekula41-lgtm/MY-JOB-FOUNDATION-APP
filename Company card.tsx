import { Link } from "react-router-dom";
import {
  Building2,
  MapPin,
  Star,
  Users,
  Briefcase,
  Globe,
} from "lucide-react";

export interface CompanyCardProps {
  id: number;
  name: string;
  logo?: string;
  location: string;
  industry: string;
  rating: number;
  employees: string;
  openJobs: number;
  website?: string;
  description: string;
}

export default function CompanyCard({
  id,
  name,
  logo,
  location,
  industry,
  rating,
  employees,
  openJobs,
  website,
  description,
}: CompanyCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="flex items-center gap-4 p-6">

        {logo ? (
          <img
            src={logo}
            alt={name}
            className="w-16 h-16 rounded-xl object-cover border"
          />
        ) : (
          <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
            <Building2
              className="text-blue-600"
              size={30}
            />
          </div>
        )}

        <div className="flex-1">

          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {name}
          </h2>

          <p className="text-gray-500">
            {industry}
          </p>

          <div className="flex items-center gap-1 mt-2">

            <Star
              className="text-yellow-500 fill-yellow-500"
              size={16}
            />

            <span className="font-medium">
              {rating}
            </span>

          </div>

        </div>

      </div>

      {/* Description */}

      <div className="px-6">

        <p className="text-gray-600 dark:text-gray-300 leading-7 line-clamp-3">
          {description}
        </p>

      </div>

      {/* Company Info */}

      <div className="grid grid-cols-2 gap-4 px-6 mt-6">

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <MapPin size={16} />
          {location}
        </div>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Users size={16} />
          {employees}
        </div>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Briefcase size={16} />
          {openJobs} Jobs
        </div>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Globe size={16} />

          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Website
            </a>
          ) : (
            "Private"
          )}

        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center p-6">

        <Link
          to={`/companies/${id}`}
          className="text-blue-600 hover:underline font-semibold"
        >
          View Company
        </Link>

        <Link
          to={`/companies/${id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Explore Jobs
        </Link>

      </div>

    </div>
  );
}
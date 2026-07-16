    import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Users,
  Globe,
  Building2,
  Star,
  Briefcase,
  ArrowLeft,
} from "lucide-react";

export default function CompanyDetail() {
  const { id } = useParams();

  const company = {
    id,
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    industry: "Technology",
    location: "Bangalore, India",
    website: "https://www.google.com",
    employees: "150,000+",
    founded: "1998",
    rating: 4.9,
    openJobs: 42,
    about:
      "Google is a global technology company specializing in internet-related services and products including search engines, cloud computing, artificial intelligence, advertising technologies, and software solutions.",
    benefits: [
      "Competitive Salary",
      "Health Insurance",
      "Remote Work",
      "Flexible Working Hours",
      "Learning Budget",
      "Free Meals",
      "Annual Bonus",
      "Stock Options",
    ],
    jobs: [
      {
        id: 1,
        title: "React Developer",
        location: "Bangalore",
        salary: "12 LPA",
      },
      {
        id: 2,
        title: "Python Backend Developer",
        location: "Hyderabad",
        salary: "15 LPA",
      },
      {
        id: 3,
        title: "DevOps Engineer",
        location: "Remote",
        salary: "18 LPA",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10">

      <Link
        to="/companies"
        className="inline-flex items-center gap-2 text-blue-600 mb-8"
      >
        <ArrowLeft size={18} />
        Back to Companies
      </Link>

      {/* Company Header */}

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">

        <div className="flex flex-col lg:flex-row gap-8">

          <img
            src={company.logo}
            alt={company.name}
            className="w-28 h-28 rounded-xl object-contain"
          />

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              {company.name}
            </h1>

            <p className="text-blue-600 text-lg mt-2">
              {company.industry}
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="flex items-center gap-3">
                <MapPin size={20} />
                {company.location}
              </div>

              <div className="flex items-center gap-3">
                <Users size={20} />
                {company.employees}
              </div>

              <div className="flex items-center gap-3">
                <Building2 size={20} />
                Founded {company.founded}
              </div>

              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={20} />
                {company.rating} Rating
              </div>

              <div className="flex items-center gap-3">
                <Briefcase size={20} />
                {company.openJobs} Open Jobs
              </div>

              <div className="flex items-center gap-3">
                <Globe size={20} />

                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600"
                >
                  Visit Website
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* About */}

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg mt-10 p-8">

        <h2 className="text-3xl font-bold mb-5">
          About Company
        </h2>

        <p className="leading-8 text-gray-600 dark:text-gray-300">
          {company.about}
        </p>

      </div>

      {/* Benefits */}

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg mt-10 p-8">

        <h2 className="text-3xl font-bold mb-8">
          Employee Benefits
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {company.benefits.map((benefit) => (

            <div
              key={benefit}
              className="bg-blue-50 dark:bg-slate-800 p-5 rounded-xl text-center font-medium"
            >
              {benefit}
            </div>

          ))}

        </div>

      </div>

      {/* Jobs */}

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg mt-10 p-8">

        <h2 className="text-3xl font-bold mb-8">
          Open Positions
        </h2>

        <div className="space-y-5">

          {company.jobs.map((job) => (

            <div
              key={job.id}
              className="border rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center"
            >

              <div>

                <h3 className="text-xl font-bold">
                  {job.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {job.location}
                </p>

                <p className="text-blue-600 mt-2">
                  {job.salary}
                </p>

              </div>

              <Link
                to={`/jobs/${job.id}`}
                className="mt-5 lg:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                View Job
              </Link>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
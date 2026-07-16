import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import CompanyCard from "../components/CompanyCard";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Building2,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const featuredJobs = [
    {
      id: 1,
      title: "React Developer",
      company: "Google",
      location: "Bangalore",
      experience: "1-3 Years",
      salary: "12 LPA",
      jobType: "Full Time",
      skills: ["React", "TypeScript", "Tailwind"],
      postedAt: "2 Days Ago",
      featured: true,
    },
    {
      id: 2,
      title: "Python Full Stack Developer",
      company: "Microsoft",
      location: "Hyderabad",
      experience: "Fresher",
      salary: "8 LPA",
      jobType: "Full Time",
      skills: ["Python", "Django", "React"],
      postedAt: "Today",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Amazon",
      location: "Chennai",
      experience: "2+ Years",
      salary: "15 LPA",
      jobType: "Remote",
      skills: ["Python", "FastAPI", "PostgreSQL"],
      postedAt: "Yesterday",
    },
  ];

  const companies = [
    {
      id: 1,
      name: "Google",
      industry: "Technology",
      location: "Bangalore",
      rating: 4.9,
      employees: "1,50,000+",
      openJobs: 45,
      description:
        "Build products used by billions of users around the world.",
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Software",
      location: "Hyderabad",
      rating: 4.8,
      employees: "2,20,000+",
      openJobs: 30,
      description:
        "Empowering every person and organization on the planet.",
    },
  ];

  return (
    <div>

      {/* Hero */}
      <Hero />

      {/* Statistics */}
      <section className="py-20 container">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">

            <Briefcase
              size={40}
              className="mx-auto text-blue-600"
            />

            <h2 className="text-4xl font-bold mt-4">
              500+
            </h2>

            <p className="text-gray-500 mt-2">
              Live Jobs
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">

            <Building2
              size={40}
              className="mx-auto text-green-600"
            />

            <h2 className="text-4xl font-bold mt-4">
              150+
            </h2>

            <p className="text-gray-500 mt-2">
              Companies
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">

            <Users
              size={40}
              className="mx-auto text-purple-600"
            />

            <h2 className="text-4xl font-bold mt-4">
              50K+
            </h2>

            <p className="text-gray-500 mt-2">
              Candidates
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">

            <Trophy
              size={40}
              className="mx-auto text-yellow-500"
            />

            <h2 className="text-4xl font-bold mt-4">
              2K+
            </h2>

            <p className="text-gray-500 mt-2">
              Placements
            </p>

          </div>

        </div>

      </section>

      {/* Featured Jobs */}

      <section className="container py-20">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              Featured Jobs
            </h2>

            <p className="text-gray-500 mt-2">
              Latest opportunities from top companies.
            </p>

          </div>

          <Link
            to="/jobs"
            className="text-blue-600 flex items-center gap-2"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
            />
          ))}

        </div>

      </section>

      {/* Top Companies */}

      <section className="container py-20">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              Top Companies
            </h2>

            <p className="text-gray-500 mt-2">
              Work with the world's leading organizations.
            </p>

          </div>

          <Link
            to="/companies"
            className="text-blue-600 flex items-center gap-2"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              {...company}
            />
          ))}

        </div>

      </section>

      {/* Categories */}

      <section className="container py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

          {[
            "React",
            "Python",
            "Java",
            "Node.js",
            "Data Science",
            "DevOps",
            "AI / ML",
            "Cyber Security",
            "Flutter",
            "UI / UX",
            "Cloud",
            "Testing",
          ].map((category) => (
            <Link
              key={category}
              to={`/jobs?category=${category}`}
              className="bg-white dark:bg-slate-900 shadow rounded-xl p-5 text-center hover:bg-blue-600 hover:text-white transition"
            >
              {category}
            </Link>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="container py-20">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">

          <h2 className="text-5xl font-bold">
            Ready To Start Your Career?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Discover thousands of jobs, internships,
            and career opportunities today.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

        </div>

      </section>

    </div>
  );
}
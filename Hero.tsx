import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Search,
  Briefcase,
  Building2,
  Users,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (keyword) params.append("search", keyword);
    if (location) params.append("location", location);

    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full -top-32 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-cyan-300 rounded-full bottom-0 right-0 blur-3xl"></div>
      </div>

      <div className="container relative z-10 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6">

              🚀 Trusted by 50,000+ Professionals

            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">

              Find Your

              <span className="block text-yellow-300">
                Dream Job
              </span>

              With Top Companies

            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-8">

              Discover thousands of verified jobs,
              internships, remote opportunities,
              mock interviews, coding tests,
              and resume building tools in one platform.

            </p>

            {/* Search */}

            <div className="bg-white rounded-2xl shadow-xl p-5 mt-10">

              <div className="grid md:grid-cols-3 gap-3">

                <div className="relative">

                  <Search
                    className="absolute left-4 top-4 text-gray-400"
                    size={18}
                  />

                  <input
                    value={keyword}
                    onChange={(e) =>
                      setKeyword(e.target.value)
                    }
                    placeholder="Job title or skill"
                    className="pl-11 text-black"
                  />

                </div>

                <div className="relative">

                  <MapPin
                    className="absolute left-4 top-4 text-gray-400"
                    size={18}
                  />

                  <input
                    value={location}
                    onChange={(e) =>
                      setLocation(e.target.value)
                    }
                    placeholder="Location"
                    className="pl-11 text-black"
                  />

                </div>

                <button
                  onClick={handleSearch}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all"
                >
                  Search Jobs
                </button>

              </div>

            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/jobs"
                className="bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Browse Jobs
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/companies"
                className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition"
              >
                Explore Companies
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div className="glass rounded-2xl p-6">

              <Briefcase
                className="text-yellow-300 mb-4"
                size={40}
              />

              <h3 className="text-3xl font-bold">
                500+
              </h3>

              <p className="text-blue-100">
                Active Jobs
              </p>

            </div>

            <div className="glass rounded-2xl p-6">

              <Building2
                className="text-green-300 mb-4"
                size={40}
              />

              <h3 className="text-3xl font-bold">
                120+
              </h3>

              <p className="text-blue-100">
                Top Companies
              </p>

            </div>

            <div className="glass rounded-2xl p-6">

              <Users
                className="text-pink-300 mb-4"
                size={40}
              />

              <h3 className="text-3xl font-bold">
                50K+
              </h3>

              <p className="text-blue-100">
                Registered Users
              </p>

            </div>

            <div className="glass rounded-2xl p-6">

              <Search
                className="text-cyan-300 mb-4"
                size={40}
              />

              <h3 className="text-3xl font-bold">
                98%
              </h3>

              <p className="text-blue-100">
                Hiring Success
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  MapPin,
  Users,
  Briefcase,
  Search,
  Star,
} from "lucide-react";

interface Company {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  employees: string;
  rating: number;
  openJobs: number;
  description: string;
}

export default function Companies() {
  const [search, setSearch] = useState("");

  const companies: Company[] = [
    {
      id: 1,
      name: "Google",
      logo: "https://logo.clearbit.com/google.com",
      industry: "Technology",
      location: "Bangalore",
      employees: "150,000+",
      rating: 4.9,
      openJobs: 42,
      description:
        "Build products that help billions of users around the world.",
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
      industry: "Software",
      location: "Hyderabad",
      employees: "220,000+",
      rating: 4.8,
      openJobs: 35,
      description:
        "Empowering every person and organization on the planet.",
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      industry: "E-Commerce",
      location: "Chennai",
      employees: "1.5 Million+",
      rating: 4.7,
      openJobs: 58,
      description:
        "Customer-centric company offering exciting tech careers.",
    },
    {
      id: 4,
      name: "Adobe",
      logo: "https://logo.clearbit.com/adobe.com",
      industry: "Software",
      location: "Noida",
      employees: "30,000+",
      rating: 4.8,
      openJobs: 18,
      description:
        "Changing the world through digital experiences.",
    },
    {
      id: 5,
      name: "Infosys",
      logo: "https://logo.clearbit.com/infosys.com",
      industry: "IT Services",
      location: "Pune",
      employees: "300,000+",
      rating: 4.5,
      openJobs: 60,
      description:
        "Global leader in next-generation digital services.",
    },
    {
      id: 6,
      name: "TCS",
      logo: "https://logo.clearbit.com/tcs.com",
      industry: "IT Services",
      location: "Mumbai",
      employees: "600,000+",
      rating: 4.6,
      openJobs: 72,
      description:
        "Leading IT company with worldwide opportunities.",
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Header */}

      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold">
          Top Companies
        </h1>

        <p className="mt-4 text-gray-500">
          Explore companies hiring talented professionals.
        </p>

      </div>

      {/* Search */}

      <div className="relative max-w-xl mx-auto mb-12">

        <Search
          className="absolute left-4 top-4 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl border dark:bg-slate-900"
        />

      </div>

      {/* Companies */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {filteredCompanies.map((company) => (

          <div
            key={company.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 rounded-xl object-contain mb-5"
            />

            <h2 className="text-2xl font-bold">
              {company.name}
            </h2>

            <p className="text-blue-600 mt-1">
              {company.industry}
            </p>

            <p className="mt-4 text-gray-600">
              {company.description}
            </p>

            <div className="space-y-3 mt-6 text-gray-500">

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {company.location}
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                {company.employees}
              </div>

              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                {company.openJobs} Open Jobs
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  className="text-yellow-500"
                />
                {company.rating}
              </div>

            </div>

            <Link
              to={`/companies/${company.id}`}
              className="mt-8 inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              <Building2 size={18} className="mr-2" />
              View Company
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}
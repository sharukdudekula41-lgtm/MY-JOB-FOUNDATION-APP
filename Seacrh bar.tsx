import { useEffect, useState } from "react";
import { Search, MapPin, Briefcase, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (filters: {
    keyword: string;
    location: string;
    category: string;
  }) => void;
}

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "React",
  "Angular",
  "Vue",
  "Node.js",
  "Python",
  "Java",
  "Django",
  "Spring Boot",
  "DevOps",
  "Cloud",
  "Data Science",
  "AI / ML",
  "UI / UX",
  "Mobile Development",
];

export default function SearchBar({
  onSearch,
}: SearchBarProps) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All");

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch({
        keyword,
        location,
        category,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword, location, category]);

  const clearFilters = () => {
    setKeyword("");
    setLocation("");
    setCategory("All");

    onSearch({
      keyword: "",
      location: "",
      category: "All",
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-slate-700">

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">

        {/* Keyword */}

        <div className="relative">

          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Job title, skill..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="pl-11"
          />

        </div>

        {/* Location */}

        <div className="relative">

          <MapPin
            className="absolute left-4 top-3.5 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-11"
          />

        </div>

        {/* Category */}

        <div className="relative">

          <Briefcase
            className="absolute left-4 top-3.5 text-gray-400"
            size={20}
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="pl-11"
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <button
            onClick={() =>
              onSearch({
                keyword,
                location,
                category,
              })
            }
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Search
          </button>

          <button
            onClick={clearFilters}
            className="w-12 flex justify-center items-center rounded-lg bg-gray-200 hover:bg-red-500 hover:text-white transition"
          >
            <X size={18} />
          </button>

        </div>

      </div>

      {/* Selected Filters */}

      {(keyword || location || category !== "All") && (
        <div className="flex flex-wrap gap-3 mt-5">

          {keyword && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Keyword: {keyword}
            </span>
          )}

          {location && (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Location: {location}
            </span>
          )}

          {category !== "All" && (
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          )}

        </div>
      )}
    </div>
  );
}
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import Filter, { FilterValues } from "../components/Filter";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { Grid, List } from "lucide-react";

interface Job {
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
}

const sampleJobs: Job[] = [
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
    skills: ["FastAPI", "Python", "PostgreSQL"],
    postedAt: "Yesterday",
  },
  {
    id: 4,
    title: "Java Developer",
    company: "Infosys",
    location: "Pune",
    experience: "3+ Years",
    salary: "10 LPA",
    jobType: "Hybrid",
    skills: ["Java", "Spring Boot", "MySQL"],
    postedAt: "3 Days Ago",
  },
  {
    id: 5,
    title: "Frontend Engineer",
    company: "Adobe",
    location: "Noida",
    experience: "2 Years",
    salary: "14 LPA",
    jobType: "Remote",
    skills: ["React", "Redux", "CSS"],
    postedAt: "5 Days Ago",
  },
];

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  const [filters, setFilters] = useState<FilterValues>({
    jobType: "All",
    experience: "All",
    workMode: "All",
    salary: "All",
    sortBy: "Newest",
  });

  const [page, setPage] = useState(1);
  const [view, setView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setJobs(sampleJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredJobs = useMemo(() => {
    let data = [...jobs];

    if (search.keyword) {
      data = data.filter((job) =>
        job.title
          .toLowerCase()
          .includes(search.keyword.toLowerCase())
      );
    }

    if (search.location) {
      data = data.filter((job) =>
        job.location
          .toLowerCase()
          .includes(search.location.toLowerCase())
      );
    }

    if (
      filters.jobType !== "All"
    ) {
      data = data.filter(
        (job) =>
          job.jobType === filters.jobType
      );
    }

    return data;
  }, [jobs, search, filters]);

  const jobsPerPage = 6;

  const totalPages = Math.ceil(
    filteredJobs.length / jobsPerPage
  );

  const displayedJobs = filteredJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  if (loading) {
    return (
      <Loader text="Loading Jobs..." />
    );
  }
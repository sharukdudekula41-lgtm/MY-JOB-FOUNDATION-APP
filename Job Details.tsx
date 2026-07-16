import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Building2,
  Bookmark,
  Share2,
} from "lucide-react";

export default function JobDetail() {
  const { id } = useParams();

  const job = {
    id,
    title: "React Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "12 LPA",
    experience: "2+ Years",
    jobType: "Full Time",
    posted: "2 Days Ago",
    description:
      "We are looking for an experienced React Developer to build scalable web applications with TypeScript, Tailwind CSS, and modern frontend technologies.",
    responsibilities: [
      "Develop reusable React components.",
      "Collaborate with backend developers.",
      "Write clean and maintainable code.",
      "Optimize application performance.",
      "Participate in code reviews.",
    ],
    qualifications: [
      "Bachelor's Degree in Computer Science.",
      "2+ Years React experience.",
      "Strong JavaScript & TypeScript knowledge.",
      "Experience with REST APIs.",
      "Git & GitHub knowledge.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind",
      "Redux",
      "Git",
      "REST API",
    ],
  };

  return (
    <div className="container mx-auto py-10">

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-8">

        <div className="flex justify-between items-start">

          <div>

            <h1 className="text-4xl font-bold">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-5 text-gray-600">

              <span className="flex items-center gap-2">
                <Building2 size={18} />
                {job.company}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={18} />
                {job.location}
              </span>

              <span className="flex items-center gap-2">
                <DollarSign size={18} />
                {job.salary}
              </span>

              <span className="flex items-center gap-2">
                <Briefcase size={18} />
                {job.experience}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={18} />
                {job.posted}
              </span>

            </div>

          </div>

          <div className="flex gap-3">

            <button className="p-3 rounded-lg border">
              <Bookmark size={20} />
            </button>

            <button className="p-3 rounded-lg border">
              <Share2 size={20} />
            </button>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Job Description
          </h2>

          <p className="text-gray-600 leading-8">
            {job.description}
          </p>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Responsibilities
          </h2>

          <ul className="list-disc pl-6 space-y-3">

            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

          </ul>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Qualifications
          </h2>

          <ul className="list-disc pl-6 space-y-3">

            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

          </ul>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Skills Required
          </h2>

          <div className="flex flex-wrap gap-3">

            {job.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-12 flex gap-5">

          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700">
            Apply Now
          </button>

          <Link
            to="/jobs"
            className="border px-8 py-4 rounded-lg hover:bg-gray-100"
          >
            Back to Jobs
          </Link>

        </div>

      </div>

    </div>
  );
}
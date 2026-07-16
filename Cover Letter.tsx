import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Download,
  Save,
} from "lucide-react";

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Resume Saved Successfully!");
  };

  const handleDownload = () => {
    alert("Resume Download Started!");
  };

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center mb-10">
          Resume Builder
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Full Name */}
          <div>
            <label className="font-semibold">Full Name</label>
            <div className="relative mt-2">
              <User className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                name="fullName"
                value={resume.fullName}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <div className="relative mt-2">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                name="email"
                value={resume.email}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                placeholder="john@gmail.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold">Phone</label>
            <div className="relative mt-2">
              <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                name="phone"
                value={resume.phone}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="font-semibold">Location</label>
            <div className="relative mt-2">
              <MapPin className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                name="location"
                value={resume.location}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="md:col-span-2">
            <label className="font-semibold">Professional Summary</label>
            <textarea
              rows={4}
              name="summary"
              value={resume.summary}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2 dark:bg-slate-800"
              placeholder="Write about yourself..."
            />
          </div>

          {/* Education */}
          <div className="md:col-span-2">
            <label className="font-semibold flex items-center gap-2">
              <GraduationCap size={18} />
              Education
            </label>

            <textarea
              rows={4}
              name="education"
              value={resume.education}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2 dark:bg-slate-800"
              placeholder="B.Tech CSE..."
            />
          </div>

          {/* Experience */}
          <div className="md:col-span-2">
            <label className="font-semibold flex items-center gap-2">
              <Briefcase size={18} />
              Experience
            </label>

            <textarea
              rows={4}
              name="experience"
              value={resume.experience}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2 dark:bg-slate-800"
            />
          </div>

          {/* Skills */}
          <div className="md:col-span-2">
            <label className="font-semibold flex items-center gap-2">
              <Code size={18} />
              Skills
            </label>

            <textarea
              rows={3}
              name="skills"
              value={resume.skills}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2 dark:bg-slate-800"
              placeholder="React, Python, SQL..."
            />
          </div>

          {/* Projects */}
          <div className="md:col-span-2">
            <label className="font-semibold">
              Projects
            </label>

            <textarea
              rows={5}
              name="projects"
              value={resume.projects}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2 dark:bg-slate-800"
            />
          </div>

        </div>

        <div className="flex flex-wrap gap-4 mt-10">

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700"
          >
            <Save size={20} />
            Save Resume
          </button>

          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-green-700"
          >
            <Download size={20} />
            Download PDF
          </button>

        </div>

      </div>

    </div>
  );
}
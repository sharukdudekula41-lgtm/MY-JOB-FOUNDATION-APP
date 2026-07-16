import { Link } from "react-router-dom";
import {
  Briefcase,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      {/* Top Section */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white text-2xl font-bold mb-4">
            <Briefcase size={28} />
            Job Foundation
          </div>

          <p className="text-slate-400 leading-7">
            Find your dream job with top companies across India.
            Explore internships, full-time opportunities,
            mock interviews, coding competitions,
            resume builder, and career guidance in one place.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              <Twitter size={22} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Github size={22} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3">

            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/jobs" className="hover:text-blue-400 transition">
                Jobs
              </Link>
            </li>

            <li>
              <Link to="/companies" className="hover:text-blue-400 transition">
                Companies
              </Link>
            </li>

            <li>
              <Link to="/mock-tests" className="hover:text-blue-400 transition">
                Mock Tests
              </Link>
            </li>

            <li>
              <Link
                to="/mock-interviews"
                className="hover:text-blue-400 transition"
              >
                Mock Interviews
              </Link>
            </li>

            <li>
              <Link
                to="/competitions"
                className="hover:text-blue-400 transition"
              >
                Competitions
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-5">
            Services
          </h2>

          <ul className="space-y-3">

            <li>Resume Builder</li>

            <li>Cover Letter Generator</li>

            <li>Career Guidance</li>

            <li>Application Tracking</li>

            <li>Job Alerts</li>

            <li>Skill Assessments</li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-5">
            Contact
          </h2>

          <div className="space-y-4">

            <div className="flex gap-3">
              <Mail className="text-blue-400 mt-1" size={18} />
              <span>support@jobfoundation.com</span>
            </div>

            <div className="flex gap-3">
              <Phone className="text-blue-400 mt-1" size={18} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-blue-400 mt-1" size={18} />
              <span>Bangalore, Karnataka, India</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700">

        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-400">
            © {year} Job Foundation. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/help"
              className="hover:text-white transition"
            >
              Help Center
            </Link>

          </div>

          <button
            onClick={scrollTop}
            className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-full"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}
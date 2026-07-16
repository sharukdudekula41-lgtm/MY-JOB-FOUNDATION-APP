import { Link } from "react-router-dom";
import {
  Trophy,
  Calendar,
  Users,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";

interface Competition {
  id: number;
  title: string;
  organizer: string;
  category: string;
  date: string;
  duration: string;
  participants: number;
  prize: string;
}

export default function Competitions() {
  const competitions: Competition[] = [
    {
      id: 1,
      title: "Hackathon 2026",
      organizer: "Google",
      category: "Programming",
      date: "25 July 2026",
      duration: "24 Hours",
      participants: 2500,
      prize: "₹2,00,000",
    },
    {
      id: 2,
      title: "React Coding Challenge",
      organizer: "Microsoft",
      category: "Frontend",
      date: "30 July 2026",
      duration: "3 Hours",
      participants: 1800,
      prize: "₹1,00,000",
    },
    {
      id: 3,
      title: "Python AI Challenge",
      organizer: "OpenAI",
      category: "Artificial Intelligence",
      date: "05 Aug 2026",
      duration: "5 Hours",
      participants: 3200,
      prize: "₹3,00,000",
    },
    {
      id: 4,
      title: "SQL Query Contest",
      organizer: "Oracle",
      category: "Database",
      date: "10 Aug 2026",
      duration: "2 Hours",
      participants: 1200,
      prize: "₹75,000",
    },
    {
      id: 5,
      title: "DSA Championship",
      organizer: "Amazon",
      category: "Algorithms",
      date: "18 Aug 2026",
      duration: "4 Hours",
      participants: 5000,
      prize: "₹2,50,000",
    },
    {
      id: 6,
      title: "Cloud Computing Contest",
      organizer: "AWS",
      category: "Cloud",
      date: "28 Aug 2026",
      duration: "6 Hours",
      participants: 1600,
      prize: "₹1,50,000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Header */}

      <div className="text-center mb-12">

        <Trophy
          size={60}
          className="mx-auto text-yellow-500"
        />

        <h1 className="text-5xl font-bold mt-6">
          Coding Competitions
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Participate in coding contests, improve your problem-solving
          skills, compete with developers worldwide, and win exciting
          prizes.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center">
          <Trophy className="mx-auto text-yellow-500" size={36} />
          <h2 className="text-3xl font-bold mt-3">100+</h2>
          <p className="text-gray-500">Competitions</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center">
          <Users className="mx-auto text-blue-600" size={36} />
          <h2 className="text-3xl font-bold mt-3">50K+</h2>
          <p className="text-gray-500">Participants</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center">
          <Award className="mx-auto text-green-600" size={36} />
          <h2 className="text-3xl font-bold mt-3">₹10L+</h2>
          <p className="text-gray-500">Prize Pool</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center">
          <Calendar className="mx-auto text-purple-600" size={36} />
          <h2 className="text-3xl font-bold mt-3">Weekly</h2>
          <p className="text-gray-500">Events</p>
        </div>

      </div>

      {/* Competition Cards */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {competitions.map((competition) => (

          <div
            key={competition.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <div className="flex justify-between items-center">

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {competition.category}
              </span>

              <span className="font-semibold text-green-600">
                {competition.prize}
              </span>

            </div>

            <h2 className="text-2xl font-bold mt-5">
              {competition.title}
            </h2>

            <p className="text-blue-600 mt-2">
              {competition.organizer}
            </p>

            <div className="space-y-3 mt-6 text-gray-600">

              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {competition.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} />
                {competition.duration}
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                {competition.participants.toLocaleString()} Participants
              </div>

            </div>

            <Link
              to={`/competitions/${competition.id}`}
              className="mt-8 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Register Now
              <ArrowRight size={18} />
            </Link>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-10 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Compete?
        </h2>

        <p className="mt-4 text-lg">
          Showcase your coding skills, gain recognition, and win amazing rewards.
        </p>

        <Link
          to="/register"
          className="inline-flex items-center gap-2 mt-8 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Join Competition
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}
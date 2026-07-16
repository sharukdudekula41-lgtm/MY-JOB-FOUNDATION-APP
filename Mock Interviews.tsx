import { Link } from "react-router-dom";
import {
  Brain,
  Clock,
  Star,
  Users,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

interface Interview {
  id: number;
  title: string;
  level: string;
  duration: string;
  questions: number;
  rating: number;
  category: string;
}

export default function MockInterviews() {
  const interviews: Interview[] = [
    {
      id: 1,
      title: "React Developer Interview",
      level: "Intermediate",
      duration: "30 Minutes",
      questions: 20,
      rating: 4.8,
      category: "Frontend",
    },
    {
      id: 2,
      title: "Python Full Stack Interview",
      level: "Beginner",
      duration: "45 Minutes",
      questions: 25,
      rating: 4.9,
      category: "Backend",
    },
    {
      id: 3,
      title: "Java Developer Interview",
      level: "Advanced",
      duration: "60 Minutes",
      questions: 30,
      rating: 4.7,
      category: "Java",
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      level: "Intermediate",
      duration: "50 Minutes",
      questions: 35,
      rating: 4.9,
      category: "DSA",
    },
    {
      id: 5,
      title: "System Design Interview",
      level: "Advanced",
      duration: "90 Minutes",
      questions: 15,
      rating: 4.8,
      category: "Architecture",
    },
    {
      id: 6,
      title: "HR Interview Practice",
      level: "Beginner",
      duration: "25 Minutes",
      questions: 15,
      rating: 4.6,
      category: "HR",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Header */}

      <div className="text-center mb-12">

        <Brain
          className="mx-auto text-blue-600"
          size={60}
        />

        <h1 className="text-5xl font-bold mt-6">
          Mock Interviews
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Practice real interview questions from top companies
          and improve your confidence before your dream job.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <Users
            className="mx-auto text-blue-600"
            size={36}
          />

          <h2 className="text-3xl font-bold mt-3">
            15K+
          </h2>

          <p className="text-gray-500">
            Students
          </p>

        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <Brain
            className="mx-auto text-green-600"
            size={36}
          />

          <h2 className="text-3xl font-bold mt-3">
            500+
          </h2>

          <p className="text-gray-500">
            Interview Sets
          </p>

        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <Clock
            className="mx-auto text-orange-600"
            size={36}
          />

          <h2 className="text-3xl font-bold mt-3">
            Live Practice
          </h2>

          <p className="text-gray-500">
            Anytime
          </p>

        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <Star
            className="mx-auto text-yellow-500"
            size={36}
          />

          <h2 className="text-3xl font-bold mt-3">
            4.9
          </h2>

          <p className="text-gray-500">
            User Rating
          </p>

        </div>

      </div>

      {/* Interview Cards */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {interviews.map((interview) => (

          <div
            key={interview.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <div className="flex justify-between">

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {interview.category}
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {interview.level}
              </span>

            </div>

            <h2 className="text-2xl font-bold mt-5">
              {interview.title}
            </h2>

            <div className="space-y-3 mt-6 text-gray-600">

              <div className="flex items-center gap-2">
                <Clock size={18} />
                {interview.duration}
              </div>

              <div className="flex items-center gap-2">
                <Brain size={18} />
                {interview.questions} Questions
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  className="text-yellow-500"
                />
                {interview.rating}
              </div>

            </div>

            <Link
              to={`/mock-interviews/${interview.id}`}
              className="mt-8 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              <PlayCircle size={20} />
              Start Interview
            </Link>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Crack Your Interview?
        </h2>

        <p className="mt-4 text-blue-100">
          Practice unlimited mock interviews and boost your confidence.
        </p>

        <Link
          to="/register"
          className="inline-flex items-center gap-2 mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get Started
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}
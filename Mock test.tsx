import { Link } from "react-router-dom";
import {
  FileCheck,
  Clock,
  Award,
  BookOpen,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

interface MockTest {
  id: number;
  title: string;
  category: string;
  questions: number;
  duration: string;
  level: string;
  marks: number;
}

export default function MockTests() {
  const tests: MockTest[] = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      category: "Frontend",
      questions: 30,
      duration: "30 Minutes",
      level: "Beginner",
      marks: 100,
    },
    {
      id: 2,
      title: "React & TypeScript",
      category: "Frontend",
      questions: 40,
      duration: "45 Minutes",
      level: "Intermediate",
      marks: 100,
    },
    {
      id: 3,
      title: "Python Programming",
      category: "Backend",
      questions: 35,
      duration: "40 Minutes",
      level: "Intermediate",
      marks: 100,
    },
    {
      id: 4,
      title: "Java + Spring Boot",
      category: "Backend",
      questions: 45,
      duration: "60 Minutes",
      level: "Advanced",
      marks: 100,
    },
    {
      id: 5,
      title: "SQL & Database",
      category: "Database",
      questions: 30,
      duration: "35 Minutes",
      level: "Intermediate",
      marks: 100,
    },
    {
      id: 6,
      title: "Data Structures",
      category: "DSA",
      questions: 50,
      duration: "75 Minutes",
      level: "Advanced",
      marks: 150,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Header */}

      <div className="text-center mb-12">

        <FileCheck
          size={60}
          className="mx-auto text-blue-600"
        />

        <h1 className="text-5xl font-bold mt-6">
          Mock Tests
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Test your technical skills with real placement
          exams designed by industry professionals.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <BookOpen
            size={36}
            className="mx-auto text-blue-600"
          />

          <h2 className="text-3xl font-bold mt-3">
            300+
          </h2>

          <p className="text-gray-500">
            Test Series
          </p>

        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <Award
            size={36}
            className="mx-auto text-yellow-500"
          />

          <h2 className="text-3xl font-bold mt-3">
            100K+
          </h2>

          <p className="text-gray-500">
            Attempts
          </p>

        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <Clock
            size={36}
            className="mx-auto text-green-600"
          />

          <h2 className="text-3xl font-bold mt-3">
            Timed
          </h2>

          <p className="text-gray-500">
            Assessments
          </p>

        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 text-center">

          <FileCheck
            size={36}
            className="mx-auto text-purple-600"
          />

          <h2 className="text-3xl font-bold mt-3">
            Instant
          </h2>

          <p className="text-gray-500">
            Results
          </p>

        </div>

      </div>

      {/* Test Cards */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {tests.map((test) => (

          <div
            key={test.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <div className="flex justify-between">

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {test.category}
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {test.level}
              </span>

            </div>

            <h2 className="text-2xl font-bold mt-5">
              {test.title}
            </h2>

            <div className="space-y-3 mt-6 text-gray-600">

              <p>
                Questions:
                <strong> {test.questions}</strong>
              </p>

              <p>
                Duration:
                <strong> {test.duration}</strong>
              </p>

              <p>
                Total Marks:
                <strong> {test.marks}</strong>
              </p>

            </div>

            <Link
              to={`/mock-tests/${test.id}`}
              className="mt-8 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              <PlayCircle size={20} />
              Start Test
            </Link>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl text-center text-white p-10">

        <h2 className="text-4xl font-bold">
          Practice Makes Perfect
        </h2>

        <p className="mt-4 text-blue-100">
          Take unlimited mock tests and improve your placement score.
        </p>

        <Link
          to="/register"
          className="inline-flex items-center gap-2 mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Practicing
          <ArrowRight size={20} />
        </Link>

      </div>

    </div>
  );
}
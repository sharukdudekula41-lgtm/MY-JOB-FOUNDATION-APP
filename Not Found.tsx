import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: Replace with backend API call
    console.log("Reset Password:", email);

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4">

      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">

        {!submitted ? (
          <>
            <div className="text-center">

              <Mail
                className="mx-auto text-blue-600"
                size={55}
              />

              <h1 className="text-3xl font-bold mt-5">
                Forgot Password?
              </h1>

              <p className="text-gray-500 mt-3">
                Enter your registered email address and we'll send
                you a password reset link.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >

              <label className="font-semibold">
                Email Address
              </label>

              <div className="relative mt-2">

                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2"
              >
                <Send size={20} />
                Send Reset Link
              </button>

            </form>
          </>
        ) : (
          <div className="text-center">

            <CheckCircle
              className="mx-auto text-green-600"
              size={70}
            />

            <h2 className="text-3xl font-bold mt-5">
              Email Sent Successfully
            </h2>

            <p className="text-gray-500 mt-4">
              A password reset link has been sent to:
            </p>

            <p className="font-semibold text-blue-600 mt-2">
              {email}
            </p>

            <p className="text-gray-500 mt-6">
              Please check your inbox and spam folder.
            </p>

          </div>
        )}

        <div className="mt-8 text-center">

          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}
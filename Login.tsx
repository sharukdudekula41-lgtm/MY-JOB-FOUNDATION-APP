import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: FormEvent
  ) => {
    e.preventDefault();

    // Backend API Integration Here

    console.log(formData);

    alert("Login Successful!");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4">

      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue your career journey.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email
            </label>

            <div className="relative mt-2">

              <Mail
                className="absolute left-4 top-4 text-gray-400"
                size={18}
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="font-semibold">
              Password
            </label>

            <div className="relative mt-2">

              <Lock
                className="absolute left-4 top-4 text-gray-400"
                size={18}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-12 dark:bg-slate-800"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2 text-sm">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2"
          >
            <LogIn size={20} />
            Login
          </button>

        </form>

        <div className="mt-8 text-center">

          <p>

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}
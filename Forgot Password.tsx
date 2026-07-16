import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Backend API Call Here

    console.log(formData);

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4">

      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-500 mt-3">
            Join Job Foundation and start your career journey.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          {/* Full Name */}

          <div>

            <label className="font-semibold">
              Full Name
            </label>

            <div className="relative mt-2">

              <User
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email
            </label>

            <div className="relative mt-2">

              <Mail
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
              />

            </div>

          </div>

          {/* Phone */}

          <div>

            <label className="font-semibold">
              Phone Number
            </label>

            <div className="relative mt-2">

              <Phone
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
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
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Create Password"
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

          {/* Confirm Password */}

          <div>

            <label className="font-semibold">
              Confirm Password
            </label>

            <div className="relative mt-2">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={
                  showConfirmPassword ? "text" : "password"
                }
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full border rounded-xl py-3 pl-12 pr-12 dark:bg-slate-800"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2"
          >
            <UserPlus size={20} />
            Create Account
          </button>

        </form>

        <div className="mt-8 text-center">

          <p>

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}
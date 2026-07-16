import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Camera,
  Save,
} from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Bangalore, India",
    title: "Full Stack Developer",
    bio: "Passionate Full Stack Developer with experience in React, TypeScript, Python, Django and SQL.",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://johndoe.dev",
  });

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: FormEvent
  ) => {
    e.preventDefault();
    alert("Profile Updated Successfully");
  };

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden">

        {/* Cover */}

        <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

        {/* Avatar */}

        <div className="flex flex-col items-center -mt-16">

          <div className="relative">

            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />

            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
              <Camera size={18} />
            </button>

          </div>

          <h1 className="text-3xl font-bold mt-5">
            {profile.fullName}
          </h1>

          <p className="text-gray-500">
            {profile.title}
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-10"
        >

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="font-semibold">
                Full Name
              </label>

              <div className="relative mt-2">

                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

            </div>

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
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                Phone
              </label>

              <div className="relative mt-2">

                <Phone
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                Location
              </label>

              <div className="relative mt-2">

                <MapPin
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                GitHub
              </label>

              <div className="relative mt-2">

                <Github
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  name="github"
                  value={profile.github}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                LinkedIn
              </label>

              <div className="relative mt-2">

                <Linkedin
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  name="linkedin"
                  value={profile.linkedin}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

            </div>

            <div className="md:col-span-2">

              <label className="font-semibold">
                Portfolio Website
              </label>

              <div className="relative mt-2">

                <Globe
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  name="website"
                  value={profile.website}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4 dark:bg-slate-800"
                />

              </div>

            </div>

            <div className="md:col-span-2">

              <label className="font-semibold">
                Bio
              </label>

              <textarea
                rows={6}
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 mt-2 dark:bg-slate-800"
              />

            </div>

          </div>

          <button
            type="submit"
            className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-700"
          >
            <Save size={20} />
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}
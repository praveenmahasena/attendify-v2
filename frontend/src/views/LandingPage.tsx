import React,{ useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 font-sans">
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white/80 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-blue-800">Attendify</h1>
        <nav className="relative">
          <button
            className="text-blue-800 hover:text-blue-600 font-medium text-lg"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Login
          </button>
          {showDropdown && (
            <ul
              className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <li>
                <Link to="admin/login" className="block px-4 py-2 hover:bg-blue-100">Admin</Link>
              </li>
              <li>
                <Link to="/login/teacher" className="block px-4 py-2 hover:bg-blue-100">Teacher</Link>
              </li>
              <li>
                <Link to="/login/student" className="block px-4 py-2 hover:bg-blue-100">Student</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Smart Attendance Tracking Made Simple
        </h2>
        <p className="text-lg md:text-xl text-blue-800 mb-10 max-w-2xl">
          Manage attendance for students, teachers, and administrators efficiently with real-time insights and easy reporting.
        </p>
        <Link
          to="/start"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg transition-all"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}


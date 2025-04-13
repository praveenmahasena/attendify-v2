import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real login logic
    if (email === "admin@example.com" && password === "password") {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

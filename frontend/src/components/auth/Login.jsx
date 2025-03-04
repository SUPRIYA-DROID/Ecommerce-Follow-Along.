import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        email,
        password,
      });
  
      console.log("Login successful!", response.data);
  
      const { token, user } = response.data;
  
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));  // ✅ Store user details
      }
      localStorage.setItem("token", token);  // ✅ Store token
  
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  
  
  

  return (
    <div className="min-h-screen bg-red-400 flex flex-col items-center justify-center">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link to="/signup" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
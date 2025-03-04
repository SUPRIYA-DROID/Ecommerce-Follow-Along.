import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);  // ✅ Set user state
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Remove corrupted data
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="h-16 fixed top-0 left-0 right-0 z-1 w-full bg-red-900 text-white flex items-center justify-between px-6 shadow-lg">
      <h1 className="text-2xl font-semibold tracking-wide">
        Supriya <span>Madness</span>
      </h1>

      <div className="space-x-4">
        {user ? (
          <>
              <span className="text-lg font-medium">Welcome <span className='text-yellow-300'>{user.name}</span> !</span>
            <button
              onClick={() => navigate('/products')} // ✅ Show Product button after login
              className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-green-700"
            >
              Add Products
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-blue-900 px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-gray-200"
            >
              Signup
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
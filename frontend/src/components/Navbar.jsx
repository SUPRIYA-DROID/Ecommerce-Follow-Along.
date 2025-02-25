import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-gray-900 text-white flex items-center justify-between px-6 shadow-lg">
      {/* Website Name */}
      <h1 className="text-2xl font-semibold tracking-wide">My Website</h1>
      
      {/* Buttons */}
      <div className="space-x-4">
        <button 
          onClick={() => navigate('/login')} 
          className="bg-white text-blue-900 px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-gray-200"
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/products')} 
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Navbar;
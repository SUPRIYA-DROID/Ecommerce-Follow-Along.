import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
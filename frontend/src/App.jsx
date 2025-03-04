import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage, Homepage, ProductForm, EditProduct} from './Routes.jsx'
 
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products" element={<ProductForm/>} />
      <Route path="/edit-product/:id" element={<EditProduct/>} />      
    </Routes>
    </BrowserRouter>
 
  );
}
 
export default App;
 
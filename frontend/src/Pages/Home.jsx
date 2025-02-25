// import React from 'react';
// import ProductCard from '../components/auth/Productcard';

// const productDetails = [
//   {
//     image: 'https://cyberriedstore.com/wp-content/uploads/2024/04/royal-challengers-Banglore9rcb-virat-kohli-jersey-product.png',
//     name: 'Product 1',
//     price: 100,
//     description: 'This is a product'
//   },
//   {
//     image: 'https://www.tradzhub.in//uploads/product_image/viratian_(1).png',
//     name: 'Product 2',
//     price: 150,
//     description: 'This is a product'
//   },
//   {
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBRuS6DNUSnFnxon8LlbMDtS9t30Le8ThkQ&s',
//     name: 'Product 3',
//     price: 300,
//     description: 'This is a product'
//   },
//   {
//     image: 'https://www.bigbasket.com/media/uploads/p/xxl/40235430_2-one8-by-virat-kohli-perfume-body-spray-aqua-long-lasting-fragrance-for-men.jpg',
//     name: 'Product 4',
//     price: 150,
//     description: 'This is a product'
//   },
//   {
//     image: 'https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1920,cm-pad_resize/data/Regal-Shoes/8-june-2023/8742697_6.jpg',
//     name: 'Product 5',
//     price: 300,
//     description: 'This is a product'
//   }
// ];

// const Homepage = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-10">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Our Products</h1>

//         {/* Grid Layout for Products */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
//           {productDetails.map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homepage;
import Home from "../components/Home";


function Homepage() {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default Homepage
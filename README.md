# E-Commerce Application (MERN Stack)

This project guides you through building a full-stack E-Commerce website using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse products, add them to their cart, and proceed to checkout. Admin users can manage products, view orders, and update inventory.

## Tech Stack

- **Frontend:** React.js, Redux, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens), bcryptjs
- **Payment Gateway:** Stripe
- **State Management:** Redux for managing app state
- **Deployment:** Heroku (or any cloud provider like AWS)

## Key Features

- **User Authentication:** 
  - Register, login, and logout functionality with secure password storage using bcryptjs.
  - JWT-based authentication to manage sessions.
  
- **Product Management:**
  - Display products with sorting and filtering options based on categories, price, ratings, etc.
  - Admin panel to add, update, or delete products.

- **Shopping Cart:**
  - Add products to the cart, view cart details, and update item quantities.
  - Display total prices and calculate shipping fees.

- **Checkout Process:**
  - Integration with Stripe for secure payment processing.
  - Users can review their order and proceed with payment.

- **Order Management:**
  - Users can view their order history and track current orders.
  - Admin can update order status (Pending, Shipped, Delivered).

- **Responsive Design:**
  - Fully responsive UI to support different screen sizes (desktop, tablet, and mobile).

- **Search and Filter:**
  - Search products by name and filter by categories, price range, and ratings.

- **Security Features:**
  - Input validation and data sanitization.
  - HTTPS support for secure data transmission.

---

## Milestone 1: User Authentication Setup

### Description:
The user authentication setup focuses on allowing users to sign up and log in with their credentials. The backend will handle secure password storage using bcryptjs, while the frontend will manage user interactions. The user will be authenticated with JWT (JSON Web Tokens) for session management.

---

## Milestone 2: Login Page & Authentication Setup

### Description:
Milestone 2 focuses on creating and setting up the **Login Page** for the application, including basic UI elements like forms and fields for user authentication. This milestone also involves setting up Tailwind CSS for styling to ensure responsive and modern design practices.

### Key Features Completed:
- **Login Page Design**: 
  - Created a responsive login page with email and password inputs.
  - Added "Remember Me" checkbox and "Forgot Password?" link.
  
- **Tailwind CSS Setup**: 
  - Integrated Tailwind CSS for styling the login page with a clean, modern interface.
  - Configured the `tailwind.config.js` and `postcss.config.js` files.

- **New Branch Creation**: 
  - Created a new branch (`milestone-2`) to manage and track the progress for this feature.
  
- **Responsive Layout**: 
  - The login page is designed to be responsive and user-friendly, adjusting for both mobile and desktop views.

### Technologies Used:
- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For managing routing (if applicable).
- **Axios**: To handle HTTP requests for user authentication (in future milestones).

---

## Milestone 3: Backend Setup

### Progress:
- Set up the project folder structure with routes, controllers, models, middlewares, and utilities.
- Created a Node.js server with Express.
- Connected the server to MongoDB using Mongoose.
- Added error handling middleware for better debugging.


## Milestone 4 Overview

### In this milestone, the following features were implemented:

- User Model Creation: A new User model was created to represent user data in the database, including necessary fields such as name, email, password, etc.
- Multer Integration: Multer was integrated to handle file uploads (e.g., profile images, documents, etc.). Multer handles multipart/form-data, which is used for uploading files in Node.js applications.


## Milestone 5: Sign-Up Page Implementation

In this milestone, I have created a **Sign-Up page** with the following features:
- A user-friendly form for entering **Name**, **Email**, **Password**, and **Confirm Password**.
- Form validation to ensure:
  - All fields are filled.
  - The email is valid.
  - The password meets the minimum length requirement and matches the confirm password field.
- Upon successful form submission, the user is redirected to the Login page.

Technologies used:
- React
- Tailwind CSS
- React Router

## Milestone 6: Backend endpoint for the Signup page to store all user data securely

In this milestone, I have implemented User Authentication for the backend with the following features:

- Password Encryption
- User Signup via Endpoint
- Tested Endpoints Using Postman GET & POST Requests

Technologies Used:
- MongoDB & Mongoose (Database & ORM)
- bcrypt.js (Password encryption)
- jsonwebtoken (JWT) (Authentication)

## Milestone 7: Backend endpoint for the Login page to store all user data securely and Implementation

In this milestone, we focus on creating a login endpoint for user authentication. This includes:

- Accepting User Credentials
- Password Hashing
- Compare Hashed Passwords
- Credentials Store in Database (MongoDB)

Technologies Used:
- MongoDB & Mongoose (Database & ORM)
- bcrypt.js (Password encryption)

## Milestone 8:Card Componenet & Homepage Layout

In this milestone, we focused on creating a Card Component and Homepage Layout. This Includes:

- Resusable Product card Component
- Responsive Grid Layout
- Tailwind CSS Styling for Home Page

## Milestone 9: Product Management Frontend

In this milestone we focused on Interacting with product API, Where users can add and view products in a simple UI, This Includes:

- Display a form to add products
- Form to add a new product
- Connects to Express & MongoDB API

## Milestone 10: Product API

In this milestone, We focused on Validation and Store Product Details Using Express and MongoDB API Using Mongoose Library

- Create a Product with name, descriptions, price and Image URL
- Validates input before storing data in MongoDB
- RESTful POST endpoint to add products
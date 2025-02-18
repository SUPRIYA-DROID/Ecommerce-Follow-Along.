# E-commerce-follow-along

# Project Overview: E-Commerce Application (MERN Stack )

This project will guide you through building  full-stack E-commerce website  using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse products, add them to the cart, and proceed to checkout. Admin users can manage products, view orders, and update inventory.

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



# Milestone 1: 

In a MERN stack application, login and sign-up (authentication) typically involve a process where users can register (sign-up) with their credentials, and later log in using those credentials. The login and sign-up process can be divided into several steps, with separate client-side (React) and server-side (Node.js/Express) handling.

# Milestone 2: Project Setup and Login Page

In this milestone, we focused on structuring our E-Commerce application and developing the Login Page as the first user-facing feature. The process involved several key steps, ensuring a solid foundation for both the frontend (React) and backend (Node.js/Express).
## Milestone 3: Backend Setup

### Progress:
- Set up the project folder structure with routes, controllers, models, middlewares, and utilities.
- Created a Node.js server with Express.
- Connected the server to MongoDB using Mongoose.
- Added error handling middleware for better debugging.
- 

## Milestone 4 Overview

### In this milestone, the following features were implemented:

- User Model Creation: A new User model was created to represent user data in the database, including necessary fields such as name, email, password, etc.
- Multer Integration: Multer was integrated to handle file uploads (e.g., profile images, documents, etc.). Multer handles multipart/form-data, which is used for uploading files in Node.js applications.



## Milestone 5: Sign-Up Page Implementation

In this milestone, I have created a Sign-Up page with the following features:
- A user-friendly form for entering Name, **Email, **Password, and **Confirm Password.
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


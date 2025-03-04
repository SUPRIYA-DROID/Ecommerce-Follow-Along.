# Ecommerce-Follow-Along

## Project Overview
The Ecommerce-Follow-Along project is a hands-on learning experience designed to guide you through the process of building a full-fledged e-commerce application from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project aims to provide practical experience with real-world development concepts and tools.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth
- **Hosting**: Vercel

## Milestone 1: Project Overview
In this milestone, you will:
- Understand the overall structure of a MERN project.
- Learn the foundational steps of setting up a new project.
- Gain clarity on the functionalities of an e-commerce application.
- Prepare for upcoming milestones by setting up the project repository.

## Milestone 2: Login Page Layout Added
In this milestone, we have successfully added the layout for the Login Page. This includes the following key features:
- **User Interface Design**: The Login Page has been designed with a clean and user-friendly interface, ensuring a seamless user experience.
- **Responsive Layout**: The layout is fully responsive, adapting to different screen sizes and devices for optimal usability.
- **Form Elements**: The Login Page includes essential form elements such as input fields for email and password, and a submit button.
- **Styling with Tailwind CSS**: Tailwind CSS has been used to style the Login Page, providing a modern and consistent look and feel.

#### Key Components
- **Header**: A welcoming header that introduces the Login Page.
- **Input Fields**: Fields for users to enter their email and password.
- **Submit Button**: A button for users to submit their login credentials.
- **Error Handling**: Basic error handling to inform users of any issues with their input.

## Milestone 3: Backend Added

In this milestone, we have successfully added the backend for our e-commerce application. This includes the following key features:

### Key Features:
- **API Endpoints**: Implemented several API endpoints for handling user authentication, product management, and order processing.
- **Database Integration**: Integrated MongoDB to store and retrieve data, ensuring a seamless connection between the frontend and backend.
- **Authentication**: Added user authentication using JWT (JSON Web Tokens) to secure user data and restrict access to certain endpoints.
- **Error Handling**: Implemented comprehensive error handling to provide informative responses and ensure a smooth user experience.
- **Middleware**: Used middleware to handle tasks such as logging, parsing request bodies, and managing CORS (Cross-Origin Resource Sharing).

This milestone lays the foundation for the backend of our e-commerce application, providing essential functionality to support user interactions and data management. We will continue to build on this foundation in upcoming milestones to enhance the features and improve the user experience.

## Milestone 4: Backend Enhancements
In this milestone, we made several important updates to our e-commerce application. Here's a summary of what we did:

### Learning Goals 🎯
By the end of this milestone, we accomplished the following:
1. **Created a User Model**: This is like a blueprint for how we store user data, such as name, email, and password, in the database.
2. **Created a User Controller**: This part of the server manages user data. It handles actions like adding a new user or getting user information.
3. **Enabled File Uploads with Multer**: Multer is a tool that helps our app accept and store files (like profile pictures) uploaded by users.

### 1. What’s a Model?
A model is like a detailed map or plan. When we create a User Model, we're designing how a user’s data will look in the database. Think of it like drawing a blueprint for a house. The model defines what information we need to store for each user.

### 2. What’s a Controller?
A controller is a part of the server that manages what happens when someone interacts with our app. For example, if someone wants to sign up, the controller handles the data sent to the server. Think of the controller as a "manager" of requests and responses, making sure everything goes smoothly.

### 3. File Uploads with Multer
Sometimes, users want to upload files like profile pictures. Multer is a tool that makes it easy to upload files to our server. It helps us store user images in the backend, like a virtual file cabinet for storing pictures.

## Milestone 5: Signup Page Added

In this milestone, we have successfully added the Signup page to our e-commerce application. This includes the following key features:
- **User Registration Form**: A form that allows new users to register by providing their name, email, password, and profile picture.
- **Form Validation**: Implemented validation for the name, email, and password fields to ensure data integrity and provide feedback to the user.
- **Password Visibility Toggle**: Added an eye icon that allows users to toggle the visibility of the password field for convenience.
- **File Upload**: Users can upload a profile picture during registration. The image is displayed as a preview before submission.
- **Form Submission**: On successful validation, the form data is submitted to the server using Axios. The server processes the registration request and stores the user data in the database.
- **Error Handling**: Basic error handling to inform users of any issues with their input.

## Milestone 6: Database Added to Signup Page

In this milestone, we have successfully connected the Signup page to the database. This includes the following key features:
- **User Data Storage**: When users register, their information (name, email, hashed password, and profile picture URL) is now stored in MongoDB.
- **Backend Validation**: Ensured that duplicate email registrations are prevented and added server-side validation to enhance security.
- **Encrypted Passwords**: Used bcrypt to hash user passwords before storing them in the database for added security.
- **Improved User Experience**: Users now receive a confirmation message after successful registration.

With this milestone, our signup functionality is fully functional and integrated with the backend, allowing seamless user registration and database storage.

## Milestone 7: Logic Added to Signup Page and login page

This milestone focuses on adding robust logic to the Signup and Login pages, improving data validation, user authentication, error handling, database integration, and overall user experience. These enhancements lay the groundwork for a secure and user-friendly application, ensuring that user interactions are smooth and reliable.

## Milestone 8: Home Page with Product Display
In this milestone, we've added a Home Page to our e-commerce application, where our products are prominently displayed. Here are the key features and improvements:

# Key Features:
# Product Display:

The Home Page now showcases a variety of products with images, names, and prices.
Each product is displayed in a grid layout for easy browsing.
Responsive Design:

The layout is fully responsive, ensuring optimal viewing on different devices, including desktops, tablets, and mobile phones.
User-Friendly Interface:

Enhanced the user interface with intuitive navigation, ensuring a smooth and enjoyable shopping experience.
Added hover effects and animations to improve visual appeal and interactivity.
# Summary:
This milestone focuses on creating an engaging Home Page where users can easily browse and explore our products. By adding responsive design. we have significantly improved the user experience. This update marks an essential step in making our e-commerce application user-friendly and visually appealing.

# Product Management Frontend (Milestone 9)
A React.js frontend to interact with the Product API (Milestone 10). Users can add and view products in a simple UI.

# Features
Display a list of products.
Form to add a new product.
Connects to Express & MongoDB API (Milestone 10).

## Milestone 10: Product API
In this milestone, We focused on Validation and Store Product Details Using Express and MongoDB API Using Mongoose Library

Create a Product with name, descriptions, price and Image URL
Validates input before storing data in MongoDB
RESTful POST endpoint to add products

## Milestone 11: Displaying all products from Database
In this milestone, we focused on sending and receiving product data between the backend and frontend, and dynamically displaying the product information using React components.

Creating an API Endpoint to send product data
Receive data on the frontend
Dynamically display product data

## Milestone 12: My Products Page
In this milestone, we created a "My Products" page that displays all the products added by the user, filtered by their email.

Added an endpoint to fetch products by user email.
Created a function to retrieve and display products dynamically.
Utilized the Card component to present each product.

## Milestone 13: Edit Product Functionality
Learning Goals 🎯
Write an endpoint to update existing data in MongoDB.
Autofill forms with previous data for editing.

## Milestone 14: Delete Product Functionality
Learning Goals 🎯
Write an endpoint to update existing data in MongoDB.
Deletes the product from the page
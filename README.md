# Project3UberClone
A ride-sharing web/mobile application inspired by Uber, designed to connect passengers with drivers seamlessly.
Table of Contents

## Project Overview
Features
Tech Stack
Project Layout
Installation
Usage
Contributing
License
Contact

## Project Overview
Project3UberClone is a full-stack ride-sharing application that replicates core functionalities of Uber. It allows users to book rides, view driver locations in real-time, and manage ride requests, while drivers can accept and complete trips. This project demonstrates proficiency in web/mobile development, real-time data handling, and API integration, built as part of a personal portfolio to showcase skills in creating scalable, user-friendly applications.
Features

* User Registration & Authentication: Secure signup/login for passengers and drivers using email or OAuth.
* Ride Booking: Request a ride by selecting pickup and drop-off locations with fare estimation.
* Real-Time Tracking: View driver’s location on a map during the ride (using Google Maps API or similar).
* Driver Dashboard: Drivers can accept/reject ride requests and view trip history.
* Payment Integration: Simulated payment gateway for ride payments (e.g., Stripe or Razorpay).
* Responsive UI: Mobile-friendly interface for seamless access on all devices.
* Notifications: Push or in-app notifications for ride updates (if implemented).

## Tech Stack

- Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB (for user and ride data) or Firebase (for real-time updates)
- APIs:
- Google Maps API (for location tracking and route optimization)
- RESTful APIs (for ride and user management)


- Real-Time: WebSocket or Firebase Realtime Database (for live driver tracking)
- Other Tools: Git, npm, Axios, Docker 

## Project Layout
Below is the structure of the project directory to help you navigate the codebase:
Project3UberClone/
├── client/                     # Frontend code (React)
│   ├── public/                 # Static assets (e.g., favicon, index.html)
│   ├── src/                    # React source code
│   │   ├── components/         # Reusable UI components (e.g., RideCard, Map)
│   │   ├── pages/              # Page components (e.g., Home, Booking, Profile)
│   │   ├── assets/             # Images, fonts, and styles
│   │   ├── App.js              # Main app component
│   │   └── index.js            # Entry point
├── server/                     # Backend code (Node.js/Express)
│   ├── routes/                 # API routes (e.g., users, rides, drivers)
│   ├── models/                 # Database schemas (e.g., User, Ride)
│   ├── controllers/            # Business logic for API endpoints
│   ├── middleware/             # Authentication and error handling
│   └── server.js               # Main server file
├── .env.example                # Example environment variables
├── .gitignore                  # Files to ignore in Git
├── README.md                   # Project documentation
└── package.json                # Project dependencies and scripts

Installation
Follow these steps to set up the project locally.
Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)
MongoDB (if using MongoDB) or Firebase account (if using Firebase)
Google Maps API key
Git

Steps

Clone the Repository:
git clone https://github.com/Akshat-Sh101/Project3UberClone.git
cd Project3UberClone


Install Dependencies:

For the frontend:cd client
npm install


For the backend:cd server
npm install




Set Up Environment Variables:

Create a .env file in the server directory based on .env.example.
Add configurations, e.g.:MONGO_URI=your_mongodb_connection_string
GOOGLE_MAPS_API_KEY=your_api_key
JWT_SECRET=your_jwt_secret
PORT=5000




Run the Application:

Start the backend server:cd server
npm start


Start the frontend:cd client
npm start


The app should be accessible at http://localhost:3000 (frontend) and http://localhost:5000 (backend).



Usage

Open http://localhost:3000 in your browser.
Sign up as a passenger or driver.
As a passenger, enter pickup and drop-off locations to book a ride.
As a driver, accept ride requests from the dashboard and start the trip.
Track the ride in real-time on the map and complete the payment process.

Example

Passenger: Search for a ride from “Gurgaon Sector 14” to “DLF Cyber City” and view estimated fare.
Driver: Accept a nearby ride request and follow the map to the pickup location.

Contributing
We welcome contributions to enhance Project3UberClone! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request with a detailed description.

GitHub: Akshat-Sh101
Email: akshatsharmap42@gmail.com

⭐ Star this repository if you find it helpful!

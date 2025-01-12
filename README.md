# Real-Time Chat Application

This project is a **Real-Time Chat Application** built using modern web technologies to facilitate seamless communication. The application supports multiple users, real-time messaging, and delivers a clean and responsive user interface.

---

## Features

- **Real-Time Messaging**: Instant updates using WebSocket or similar technologies.
- **Multi-User Support**: Handles multiple users simultaneously.
- **Responsive UI**: Optimized for desktop and mobile devices.
- **Secure**: Basic user authentication and data security.
- **Scalable**: Designed to support a growing user base.

---

## Tech Stack

- **Frontend**: React.js,Tailwind css, Daisy UI, Lucid react, zustand, redux, router, toaster .
- **Backend**: Node.js with Express.js and socket.io
- **Database**: MongoDB for storing user and message data
- **Real-Time Communication**: Socket.IO (or WebSocket)
- **Deployment**: (e.g., Vercel, Netlify for frontend, and AWS/Heroku for backend)

---

## Installation Guide

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Cloud Atlas)
- Git

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone <repository-link>
   cd real-time-chat-app
   ```

2. **Install Dependencies**
   Navigate to the `frontend` and `backend` directories and install dependencies:
   ```bash
   # Backend setup
   cd backend
   npm install

   # Frontend setup
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `backend` directory with the following keys:
   ```plaintext
   MONGODB_URI = 
   PORT = 5001
   JWT_SECRET = GijdhXZSjNwogLRv
   CLOUDINARY_CLOUD_NAME =
   CLOUDINARY_API_KEY= 
   CLOUDINARY_API_SECRET =


   ```

3. **Run the Application**
   Open two terminals:
   - In one terminal, start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - In the other terminal, start the frontend server:
     ```bash
     cd frontend
     npm start
     ```

4. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`.

---

## Usage Instructions

1. **Sign Up / Log In**: Create an account or log in to an existing one.
2. **Start a Chat**: Search for other users and initiate a chat.
3. **Send Messages**: Exchange messages in real-time.

---

## Deployment

For deployment, ensure you have configured your environment variables correctly. Example:
- Deploy the backend using **Heroku** or **AWS**.
- Deploy the frontend using **Vercel** or **Netlify**.

---

## Live Demo (Optional)

[Deployed URL](#)

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.


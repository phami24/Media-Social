# Social Media App

## Overview
This project is a feature-rich social media application built using the MERN stack (MongoDB, Express, React, Node.js) with real-time capabilities powered by Socket.io and a modern, responsive user interface crafted with Chakra UI. The app provides comprehensive user authentication and authorization using JWT, enabling a secure and interactive social experience.

## Features
- 🔒 **Authentication & Authorization**: Secure user login and registration using JWT tokens.
- 📝 **Create Post**: Users can create new posts with ease.
- 🗑️ **Delete Post**: Users can delete their own posts.
- ❤️ **Like/Unlike Post**: Users can like or unlike posts.
- 💬 **Comment on Post**: Users can comment on posts.
- 👥 **Follow/Unfollow Users**: Users can follow or unfollow other users.
- ❄️ **Freeze Account**: Users can temporarily deactivate their accounts.
- 🌓 **Dark/Light Mode**: Users can switch between dark and light themes.
- 📱 **Responsive Design**: Fully responsive design for mobile and desktop devices.
- 💬 **Chat Application**: Real-time chat with image support.
- 👀 **Seen/Unseen Messages**: Message seen status indicator.
- 🔊 **Notification Sounds**: Audible notifications for messages and alerts.

## Tech Stack
- **Frontend**: 
  - ⚛️ React
  - ⚡ Chakra UI
  - 🌿 Recoil
- **Backend**: 
  - 🌐 Node.js
  - 🚀 Express
- **Database**: 
  - 🍃 MongoDB
- **Real-Time Communication**: 
  - 🔌 Socket.io

## Installation
To get started with the project, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/social-media-app.git
    cd social-media-app
    ```

2. **Install backend dependencies:**
    ```sh
    cd server
    npm install
    ```

3. **Install frontend dependencies:**
    ```sh
    cd ../client
    npm install
    ```

4. **Create a `.env` file in the `server` directory and add the following environment variables:**
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the backend server:**
    ```sh
    cd server
    npm start
    ```

6. **Run the frontend development server:**
    ```sh
    cd ../client
    npm start
    ```

## Usage
Once the application is running, you can access it at `http://localhost:3000`. Register a new account or log in with an existing account to start using the social media features.

## Contact
If you have any questions or need further assistance, feel free to reach out:

- **Email**: buibinhminhpham2004@gmail.com
- **GitHub**: [Minh Pham](https://github.com/phami24)

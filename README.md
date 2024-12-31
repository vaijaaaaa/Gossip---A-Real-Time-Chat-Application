# Gossip

Gossip is a real-time chat application built with a modern tech stack. It features user authentication, real-time messaging, and a responsive design. The project is divided into a backend and a frontend, each with its own set of dependencies and configurations.

## Features

- User Authentication (Signup, Login, Logout)
- Real-time Messaging with Socket.io
- Profile Management
- Responsive Design with Tailwind CSS and DaisyUI
- Theme Customization
- User Status (Online/Offline)

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Cloudinary for Image Uploads
- Socket.io for Real-time Communication

### Frontend

- React
- Vite
- Zustand for State Management
- React Router for Navigation
- Tailwind CSS and DaisyUI for Styling
- Axios for HTTP Requests
- Socket.io-client for Real-time Communication


## Snapshots
--Login Page
![Screenshot 2024-12-31 225724](https://github.com/user-attachments/assets/9d7d42a9-8902-4d36-996e-b690611cc453)
--Settings Page
![Screenshot 2024-12-31 225741](https://github.com/user-attachments/assets/082467f1-1ddb-4a2d-9703-a1f9b09120a1)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/vaijaaaaa/gossip.git
    cd gossip
    ```

2. Install dependencies for both backend and frontend:
    ```sh
    npm install --prefix backend
    npm install --prefix frontend
    ```

3. Create a `.env` file in the [`backend`](backend ) directory and add your environment variables:
    ```env
    PORT=5001
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

### Running the Application

1. Build the frontend:
    ```sh
    npm run build --prefix frontend
    ```

2. Start the backend server:
    ```sh
    npm start --prefix backend
    ```

3. Open your browser and navigate to [`http://localhost:5173`] to see the application in action.


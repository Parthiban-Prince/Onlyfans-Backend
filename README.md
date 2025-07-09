# 🔐 OnlyFans-Inspired Backend API

This backend API is built with Node.js and Express.js, inspired by the OnlyFans platform. It provides secure user authentication with JWT, user profile management, and endpoints for creating and fetching user-generated posts.

---

## 🚀 Features

- ✅ User Signup & Login (JWT Auth)
- 📤 Create Posts with Images/Text
- 📥 Get Random Posts
- 📂 Get Posts by Username
- 👤 Update Profile (Bio, Name, Username, Profile & Cover Photos)
- ☁️ Cloudinary Image Upload
- 🔐 Protected Routes via JWT Middleware

---

## 🛠️ Tech Stack

- **Node.js**, **Express.js**
- **MongoDB**, **Mongoose**
- **Cloudinary**, **Multer**
- **JWT**, **bcrypt**, **dotenv**

---

## 📁 Project Structure

├── index.js # Main entry point
├── .env # Environment variables
├── config # server configurations files
├── routes/ # Api routes
├── controller/ # Communication with logics
├── service/ # server logics
├── repository/ # Database Models
├── schemas/ # Database Schemas
└── utils/ # helpers functions


---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/onlyfans-backend-api.git
cd onlyfans-backend-api

```

### 2. Install Dependencies

```bash

npm install

```
### 3. Configure .env File

```bash

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

```

 ### 4. Start the Server

 ```bash

npm run dev




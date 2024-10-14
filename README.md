# **Momento** 

Momento is a Pinterest-inspired photo-sharing app where users can sign up, upload photos with descriptions, and explore content shared by others. The app aims to offer a clean and highly visual user experience for discovering and sharing photos.

## **Table of Contents**

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run Locally](#run-locally)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## **Demo**

Check out the live demo here: [App Link](https://photo-gallery-rho-five.vercel.app/)

## **Features**

- **User Authentication**: Sign up and log in functionality with secure session management.
- **Photo Uploads**: Users can upload photos with descriptions and tags.
- **Masonry Layout**: Pinterest-like grid layout for browsing images.
- **Infinite Scroll**: Seamless infinite scrolling for a smooth user experience.
- **Search & Explore**: Search by tags, categories, or descriptions to discover new photos.
- **Photo Boards**: Users can save photos into personalized boards.
- **Likes and Comments**: Engage with other users by liking and commenting on photos.
- **Responsive Design**: Mobile-first design that scales across devices.

## **Tech Stack**

### **Frontend**
- **Vite**: Frontend build tool that offers a fast development experience.
- **React**: UI library for building user interfaces.
- **TypeScript**: For type safety and better developer tooling.
- **Tailwind CSS**: Utility-first CSS framework for building responsive designs.

### **Backend**
- **Node.js & Express**: Server for handling API requests (if applicable for any custom logic).
  
### **Database**
- **PostgreSQL**: Relational database for storing users, photos, comments, and boards.
- **Prisma**: ORM for interacting with the PostgreSQL database.

### **Other Tools**
- **Prisma Migrate**: For database migrations.
- **Postman**: For API testing.

## **Getting Started**

Follow these instructions to set up the project on your local machine for development and testing purposes.

### **Prerequisites**

- Node.js (v14 or higher)
- Vite
- PostgreSQL (Ensure PostgreSQL is installed and running)
- Prisma

### **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/caesar44bc/photo-gallery.git
   cd photo-gallery
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**:
   - Install PostgreSQL on your machine if it’s not already installed.
   - Create a new PostgreSQL database for the project.
   
4. **Set up Prisma**:
   - Generate Prisma client and run migrations:
   
   ```bash
   npx prisma migrate dev
   ```

5. **Create a `.env` file** at the root of the project with the following environment variables:

   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/momento"
   ```

### **Run Locally**

1. **Start the development server**:

   ```bash
   npm run dev
   ```

2. The app will be running at `http://localhost:5173`.

## **Project Structure**

```plaintext
momento/
├── public/               # Static assets
├── prisma/               # Prisma schema and migrations
├── src/
│   ├── components/       # React components
│   ├── pages/            # Pages like Home, Profile, Upload
│   ├── services/         # Prisma client and database interaction
│   ├── styles/           # Tailwind CSS styling
│   ├── utils/            # Helper functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Vite entry point
├── .env                  # Environment variables
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Blog-Platform

A full-stack Blog Platform built with **Flask** (backend) and **React** (frontend).  

## Getting Started

Follow these steps to run the project locally:

### Backend (Flask)

1. Navigate to the backend directory:  
   
   cd backend
2.Create a virtual environment:
   
   python -m venv venv

   venv\Scripts\activate
3. Install the dependencies:

   pip install -r requirements.txt
4. run the flask application:
 
   python app.py


### Frontend (react)

1.   Navigate to the frontend directory:

   cd frontend
2. Install the dependencies:

  npm install
3. Start the React application:

  npm start

## About the Frontend

The frontend of the Blog Platform is built using **React.js**. It is simple and user-friendly so that anyone can easily browse or manage blogs.

---

### Public Access (Without Login)

- Everyone can **view all blog posts** without logging in.
- Users can read blog details and see comments.
- To **create a post or comment**, the user must log in or register.

---

### Register and Login

- To register, the user must enter a **username**, **email**, and **password**.
- After registration, the user can log in using their details.
- Once logged in, the user will be redirected to the **Dashboard**.

![Login Page](https://github.com/N-PrasanthKumar/prasanth-blog/blob/main/images/Screenshot%20(2).png)

---

### Dashboard (After Login)

- The **Dashboard** shows the user’s activity — like posts created, edited, or deleted.
- The user can perform all **CRUD operations** on posts:
  - **Create** a new post
  - **View** existing posts
  - **Edit** posts
  - **Delete** posts

![Dashboard](https://github.com/N-PrasanthKumar/prasanth-blog/blob/main/images/Screenshot%20(9).png)

---

### Creating a Post

- After login, the user can click on **Create Post**.
- The form will ask for:
  - Title
  - Content
  - Tags
  - Image (from the `images` folder)
- After submitting, the new post will appear on the home page or in the user’s dashboard.

![Create Post](https://github.com/N-PrasanthKumar/prasanth-blog/blob/main/images/Screenshot%20(7).png)

---

### Tag-Based Filter

- The frontend has a **tag filter** option.
- By clicking on a tag, the user can see posts related only to that tag.
- This helps users find posts based on topics easily.

![Tag Filter](https://github.com/N-PrasanthKumar/prasanth-blog/blob/main/images/Screenshot%20(15).png)

---

## About the Backend

The backend of this Blog Platform is built using **Flask (Python)**.  
It handles all the logic for user authentication, blog post management, comments, and admin operations.

---

### Features for Admin

- The **Admin Panel** gives full control over the platform.  
- Admin can:
  - **View RSS Feeds** of all the latest blog posts.
  - **Download the RSS Feed** in a readable format.
  - **View all blog posts** created by users.
  - **Download user data** 
  - **View comments** made on different blog posts.
  - Maintain platform security and manage user activities.

![Admin Panel](https://raw.githubusercontent.com/N-PrasanthKumar/prasanth-blog/main/images/Screenshot%20(18).png)

![Admin Panel](https://raw.githubusercontent.com/N-PrasanthKumar/prasanth-blog/main/images/Screenshot%20(19).png)

---

### Backend Overview

- Built using **Flask** and **SQLAlchemy** for database management.   
- **CORS** enabled for connecting React frontend with Flask backend.   
- Runs on `http://127.0.0.1:5000` by default.

---


### Summary

This project is a **Full-Stack Blog Platform** built using **Flask** for the backend and **React** for the frontend.

The platform allows anyone to **read blogs publicly**, while **registered users** can create, edit, delete, and comment on posts.  
The **admin** has special access to view and download RSS feeds, user data, and manage all posts and comments.

**Frontend Features:**
- User-friendly interface built with React.
- Public blog viewing and user authentication.
- Dashboard for managing posts and comments.
- Tag-based filters for easy blog search.

**Backend Features:**
- Admin panel for monitoring and downloading content.
- RSS feed generation and download support.

This project demonstrates how frontend and backend work together to create a complete blogging platform where users can interact, share, and manage their blogs efficiently.


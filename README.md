# User Feedback System

## Overview
This project is a User Feedback System designed to collect, store, and display user feedback. It demonstrates full-stack development skills using **React** for the frontend, **Node.js** and **Express.js** for the backend, and **MongoDB** for data storage.

---

## Features

### 1. Feedback Collection
- A user-friendly form to collect feedback.
- Fields include:
  - **Name**
  - **Email**
  - **Feedback Text**
  - **Category** (e.g., Suggestion, Bug Report, Feature Request, Other).

### 2. Feedback Dashboard
- Displays all collected feedback.
- Includes filtering and sorting options to manage and analyze feedback efficiently.

### 3. Dynamic Routing
- Separate routes for feedback form (`/`) and dashboard (`/dashboard`).

### 4. Responsive Design
- Mobile-friendly and responsive UI.

### 5. Success/Error Messages
- Displays appropriate messages upon feedback submission:
  - Success: "Feedback submitted successfully!"
  - Error: "Error submitting feedback. Please try again."

---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **CSS**: For styling.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.

### Database
- **MongoDB**: For storing feedback data.

### Tools
- **Axios**: For HTTP requests.
- **React Router**: For navigation and routing.

---

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running locally or in the cloud.

### Steps
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd feed-back-app
   ```

2. **Install Dependencies**
   ```bash
   cd backend
   npm install
   cd..\frotend
   npm install
   ```

3. **Setup Environment Variables**
   - Create a `.env` file in the root directory with the following variables:
     ```env
     PORT=5000
     MONGO_URI=<your-mongo-db-connection-string>
     ```

4. **Run the Application**
   - Start the backend:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend:
     ```bash
     cd..\ frontend
     npm start
     ```

5. **Access the Application**
   - Open your browser and visit:
     - Feedback Form: `http://localhost:3000/`
     - Dashboard: `http://localhost:3000/dashboard`

---

## API Endpoints

### 1. POST `/feedback`
- Submits user feedback.
- Request Body:
  ```json
  {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "feedback": "This is a test feedback.",
      "category": "Suggestion"
  }
  ```

### 2. GET `/feedback`
- Fetches all submitted feedback.
- Query Parameters:
  - **category**: Filter feedback by category (optional).

---

## Folder Structure

```
feed-back-app/
├── frontend/                # Frontend code
│   ├── src/
│   │   ├── components/    # React components (FeedbackForm, Dashboard)
│   │   ├── App.js         # Main React App component
│   │   └── index.js       # Entry point for React
├── backend/                # Backend code
│   ├── models/            # Mongoose models
│   ├── routes/            # Express route handlers
│   └── server.js          # Main server file
└── README.md              # Project documentation
```

---

## Future Enhancements
- Add authentication for accessing the dashboard.
- Implement more advanced filtering and analytics for feedback.
- Deploy the application to a cloud platform (e.g., Heroku, AWS).

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## Author
[Pradeep goud]  
[pradeepgoud.rpg@gmail.com]  
[Your LinkedIn Profile]


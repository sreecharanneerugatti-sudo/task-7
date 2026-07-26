# task-7
# React Task Manager Application

## Project Overview

The React Task Manager Application is a modern, responsive web application developed using React. It enables users to manage daily tasks efficiently by providing features such as adding, editing, deleting, filtering, and sorting tasks. The application uses React Hooks for state management and Local Storage to ensure task data persists after refreshing the browser.

---

## Features

- Add New Tasks
- Edit Existing Tasks
- Delete Tasks
- Mark Tasks as Completed
- Filter Tasks (All, Active, Completed)
- Sort Tasks (Newest First, Oldest First)
- Local Storage Data Persistence
- Responsive User Interface
- Reusable React Components
- Built with React Hooks

---

## Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- React Hooks (useState, useEffect)
- Local Storage
- Create React App

---

## Project Structure

```
task-manager/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.css
│   │
│   └── components/
│       ├── TaskInput.js
│       ├── TaskList.js
│       └── TaskItem.js
│
├── package.json
└── README.md
```

---

## Installation

### Step 1

Clone the repository

```bash
git clone https://github.com/yourusername/task-manager.git
```

---

### Step 2

Move into the project folder

```bash
cd task-manager
```

---

### Step 3

Install dependencies

```bash
npm install
```

---

### Step 4

Run the development server

```bash
npm start
```

The application will open automatically at:

```
http://localhost:3000
```

---

## Build the Project

To create a production build:

```bash
npm run build
```

The optimized files will be generated inside the **build/** folder.

---

## Available Scripts

### Start Development Server

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Build Project

```bash
npm run build
```

### Eject Configuration

```bash
npm run eject
```

---

## Components

### App.js

Main component that manages:

- Task State
- Filtering
- Sorting
- Local Storage
- CRUD Operations

---

### TaskInput.js

Responsible for:

- Adding New Tasks
- Updating Input Field

---

### TaskList.js

Responsible for:

- Displaying Task List
- Rendering Multiple Task Items

---

### TaskItem.js

Responsible for:

- Edit Task
- Delete Task
- Complete Task

---

## React Hooks Used

### useState()

Used for:

- Task List
- Input Value
- Filter State
- Edit State

### useEffect()

Used for:

- Loading tasks from Local Storage
- Saving tasks automatically whenever tasks change

---

## CRUD Operations

### Create

Users can add a new task.

### Read

Displays all saved tasks.

### Update

Users can edit task names and mark tasks as completed.

### Delete

Users can remove tasks permanently.

---

## Filtering

The application supports:

- All Tasks
- Active Tasks
- Completed Tasks

---

## Sorting

Tasks can be sorted by:

- Newest First
- Oldest First

---

## Local Storage

Task data is stored in the browser using Local Storage.

Example:

```json
[
  {
    "id": 1,
    "text": "Complete React Project",
    "completed": false
  }
]
```

---

## Responsive Design

The application is fully responsive and works on:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

## Future Improvements

- Task Categories
- Due Dates
- Priority Levels
- Dark Mode
- Search Tasks
- Drag and Drop
- User Authentication

---

## Deployment

This project can be deployed using:

- GitHub Pages
- Netlify
- Vercel

---

## Author

**Neerugatti Sree Charan**

B.Tech – Artificial Intelligence

---

## License

This project is created for educational purposes.

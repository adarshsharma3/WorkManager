

# 🚀 Team Pulse Dashboard

A professional, portfolio-quality productivity monitoring tool built for internal teams. Team Pulse provides **role-based dashboards** for both **Team Leads** and **Team Members** to ensure effective team management, live status tracking, and productivity enhancement.

🌐 **Live Demo**: [Click Here](https://work-manager-tan.vercel.app/)


## 🛠 Tech Stack

| Feature              | Technology            |
|----------------------|------------------------|
| Core Framework       | React (with Hooks)     |
| Build Tool           | Vite                   |
| State Management     | Redux Toolkit          |
| Styling              | Tailwind CSS           |
| Data Visualization   | Recharts               |
| Initial Data Source  | [randomuser.me API](https://randomuser.me) |

---

## ✨ Core Features

### 🔄 Role Switching  
Easily toggle between:
- **Team Lead View**
- **Team Member View**

Role state is managed globally using **Redux**.

---

## 👨‍💼 Team Lead View

- 🧑‍💻 **Live Team Member Status Monitor**  
  Real-time list with:
  - Avatar
  - Name
  - Colored status badge (Working, Break, Meeting, Offline)

- 📊 **Status Summary Widget**  
  Displays the aggregate count (e.g., “2 Working, 1 Meeting”)

- 📋 **Task Assignment Tool**  
  Assign new tasks using:
  - Dropdown (Member selection)
  - Task title input
  - Due date picker

- 🔍 **Advanced Filtering & Sorting**  
  - Filter members by current status  
  - Sort by number of active (uncompleted) tasks

---

## 👨‍💻 Team Member View

- ⚡ **Live Status Updates**  
  Instantly update your status:
  - Working
  - Break
  - Meeting
  - Offline

- ✅ **Personal Task Manager**
  - View assigned tasks  
  - Progress bar (0–100%)  
  - +10% / -10% buttons  
  - Auto mark as **Completed** at 100%

---

## 🎁 Bonus Features

- 💤 **Inactivity Detector**  
  Automatically marks a user as “Offline” after **10 minutes of inactivity**

- 🧁 **Status Distribution Chart**  
  A real-time **pie chart** shows how the team is distributed across statuses

- 🌙 **Dark Mode**  
  Persistent and flicker-free  
  - Toggle with 1 click  
  - Preference saved in `localStorage`

---

## 🧑‍💻 Local Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/adarshsharma3/WorkManager
cd WorkManager

2. Install Dependencies

npm install

3. Start Development Server

npm run dev

🔗 App will run at: http://localhost:5173


📝 License

This project is open-source and available under the MIT License.
✍️ Author

Adarsh Sharma
📧 adarshsharma3
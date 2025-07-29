Team Pulse Dashboard

Project Overview

Team Pulse is a professional, portfolio-quality productivity monitoring tool designed for internal teams. This application provides role-based views for "Team Leads" and "Team Members," enabling efficient team management and status tracking. Team Leads can monitor their team's live status, assign tasks, and analyze team distribution, while Team Members can update their own work status and manage their assigned tasks' progress.  

The dashboard is built using a modern, scalable frontend architecture, prioritizing maintainability, performance, and a superior developer experience.

Live:
[****](https://work-manager-tan.vercel.app/) 


Tech Stack

This project leverages a modern and efficient technology stack, adhering to industry best practices for building robust single-page applications.  

    Core Framework: React (with Hooks)

    Build Tool: Vite

    State Management: Redux Toolkit

    Styling: Tailwind CSS

    Data Visualization: Recharts

    Initial Data Source: randomuser.me API   

Features

The application is divided into two primary roles, each with a distinct set of functionalities.  

Core Functionality

    Role Switching: A seamless toggle allows users to switch between the "Team Lead" and "Team Member" views, with the current role managed in the global Redux state.

Team Lead View

    Team Member Status Monitor: View a real-time list of all team members, complete with their name, avatar, and a colored status badge (Working, Break, Meeting, Offline).

    Status Summary: A dashboard widget displays an aggregate count of team members by their current status (e.g., "2 Working, 1 Meeting").

    Task Assignment: Assign new tasks to team members via a dedicated form that includes a member selection dropdown, a task title input, and a due date picker.

    Advanced Filtering & Sorting:

        Filter the member list by their current status.

        Sort the member list by the number of active (uncompleted) tasks.

Team Member View

    Live Status Updates: Update your own working status with a single click from a selection of options (Working, Break, Meeting, Offline). The change is reflected globally across the application.

    Personal Task Management: View a list of all tasks assigned to you. Each task item includes:

        A progress bar (0-100%).

        Controls to increment or decrement progress in 10% steps.

        An automatic "Completed" status when progress reaches 100%.

Bonus Features

    Inactivity Detector: The application automatically sets a user's status to "Offline" after 10 minutes of inactivity to ensure status accuracy.

    Status Distribution Chart: A visually appealing pie chart on the Team Lead dashboard displays the current distribution of team member statuses.

    Dark Mode: A persistent, flicker-free dark mode can be toggled, with the user's preference saved in localStorage for a consistent experience across sessions.

Local Setup and Installation

To run this project on your local machine, please follow these steps:

    Clone the Repository
    Bash

git clone https://github.com/<your-username>/team-pulse-dashboard.git

Navigate to the Project Directory

Install Dependencies
This project uses npm for package management. Run the following command to install all the necessary dependencies.
Bash

npm install

Run the Development Server
Once the dependencies are installed, you can start the local development server, which is powered by Vite.
Bash

    npm run dev

    Open in Browser
    The application will be running at http://localhost:5173 (or the next available port). Open this URL in your web browser to view the application.


# Todo App

[**Live Page**](https://todo-app-for-veel.vercel.app) - Check out the working version of the project.

## Overview

A simple Todo application built with **Next.js**, **React Query**, and **Tailwind CSS**. This app allows you to add, remove, and view your tasks with real-time updates using an optimized caching mechanism.

## Features

- Add new todos
- Delete todos
- Optimistic updates with React Query
- UI with Tailwind CSS

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **React Query**: Data fetching and caching library for React
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: Superset of JavaScript with static types

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

- **npm**: npm comes installed with Node.js. If you prefer, you can also use **Yarn** as an alternative package manager.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MykhailoVobolis/todo-app-for-veel.git
   cd todo-app-for-veel
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or, if you are using Yarn:

   ```bash
   yarn install
   ```

### Running the App

After installing the dependencies, you can start the development server:

```bash
npm run dev
```

or with Yarn:

```bash
yarn dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
/src
  /app             # Main app page and others
  /components      # Reusable components (TodoList, TodoInput, TodoItem, etc.)
  /hooks           # Custom hooks (useTodos, etc.)
  /lib             # API calls, TypeScript types and other utilities
```

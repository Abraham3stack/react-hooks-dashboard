# React Hooks Dashboard

A React application built for Task 5 of the FlexiSAF Frontend Internship.

## Live Demo

https://react-hooks-dashboard.vercel.app/

## Project Overview

This project demonstrates the practical use of React Hooks and custom hooks in a single application.

The dashboard showcases:

- useState
- useEffect
- useRef
- Custom Hooks

## Features

### useState Counter

- Increase count
- Decrease count
- Reset count

### useEffect Clock

- Displays a live digital clock
- Updates every second

### useRef Focus Input

- Programmatically focuses an input field

### Custom Hook

- Tracks and displays the current browser width
- Updates automatically when the window is resized

## React Concepts Demonstrated

### useState
Used to manage counter state.

### useEffect
Used to create and clean up the live clock interval.

### useRef
Used to directly access and focus an input element.

### Custom Hook
A reusable `useWindowWidth` hook is used to monitor screen width.

## Project Structure

```txt
src/
├── components/
│   ├── Counter.jsx
│   ├── Clock.jsx
│   ├── FocusInput.jsx
│   └── WindowWidth.jsx
│
├── hooks/
│   └── useWindowWidth.js
│
├── App.jsx
├── App.css
└── main.jsx
```

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Git
- GitHub

## Installation

```bash
git clone https://github.com/Abraham3stack/react-hooks-dashboard.git
cd react-hooks-dashboard
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Author

Abraham Ogbu

FlexiSAF Frontend Internship – Task 5
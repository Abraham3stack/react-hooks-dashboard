import "./App.css";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import FocusInput from "./components/FocusInput";
import WindowWidth from "./components/WindowWidth";

function App() {
  return (
    <>
      <header className="header">
        <h1>React Hooks Dashboard</h1>
        <p>
          Task 5 - Demonstrating useState, useEffect, useRef, and a custom hook.
        </p>
      </header>

      <main className="dashboard">
        <Counter />
        <Clock />
        <FocusInput />
        <WindowWidth />
      </main>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="card">
      <h2>useEffect Clock</h2>
      <p className="time">{time}</p>
      <p>This clock updates every second using useEffect.</p>
    </section>
  );
}

export default Clock;
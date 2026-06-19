import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2>useState Counter</h2>
      <p className="count">{count}</p>

      <div className="actions">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;
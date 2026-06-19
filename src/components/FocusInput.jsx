import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <section className="card">
      <h2>useRef Focus Input</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />

      <button onClick={focusInput}>Focus Input</button>
    </section>
  );
}

export default FocusInput;
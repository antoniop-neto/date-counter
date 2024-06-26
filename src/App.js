import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  // adding days to date
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <input
        className="text-input"
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>{step}</span>

      <div className="counter">
        <button className="button" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          className="text-input"
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="button" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <span>{count === 0 ? "Today is " : ""}</span>
      <span>{count > 0 ? `${count} days from today is ` : ""}</span>
      <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
      <span>{date.toDateString()}</span>
      <div>
        <button
          className={step === 1 && count === 0 ? "hidden" : "reset-button"}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

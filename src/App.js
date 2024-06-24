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

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="counter">
        <button className="button" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <p>Step: {step}</p>
        <button className="button" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>

      <div className="counter">
        <button className="button" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <p>Count: {count}</p>
        <button className="button" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <span>{count === 0 ? "Today is " : ""}</span>
      <span>{count > 0 ? `${count} days from today is ` : ""}</span>
      <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log("it is working");

  return (
    <div>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount(count + 1);
          }, 1000);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount(count + 1);
          }, 500);
        }}
      >
        {count}
      </button>
    </div>
  );
}
export default App;

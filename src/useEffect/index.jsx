import { useEffect, useState } from "react";

export default function UsingEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect is working");
    return () => {
      console.log("useEffect returned function is working");
    };
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>click me increase</button>
    </div>
  );
}

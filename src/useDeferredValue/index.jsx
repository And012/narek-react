import { useDeferredValue, useState } from "react";

export default function UsingDeffered() {
  const [inputResult, setInputResult] = useState(0);
  const defferedInputResult = useDeferredValue(inputResult);
  console.log({ inputResult, defferedInputResult });

  return (
    <div>
      <input
        type="text"
        value={inputResult}
        onChange={(e) => setInputResult(e.target.value)}
      />
      <div>{defferedInputResult}</div>
    </div>
  );
}

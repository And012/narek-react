import { useRef } from "react";

export default function UsingRef() {
  const inputRef = useRef(null);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <div
        style={{
          height: "2000px",
          width: "300px",
          background: "red",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            inputRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          scroll to input
        </button>
      </div>
    </div>
  );
}

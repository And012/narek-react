import { useReducer } from "react";

// action -> {type: string}
function reducer(state, action) {
  switch (action.type) {
    case "+":
      return { age: state.age + 1 };
    case "-":
      return {
        age: state.age - 1,
      };
    default:
      return {
        age: state.age,
      };
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "+" }); // trigger the action
        }}
      >
        Increment age
      </button>
      <button onClick={() => dispatch({ type: "-" })}>click to decrease</button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

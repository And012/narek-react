import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
  createContext,
} from "react";

import "./App.css";

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
  }
}

const Context = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const handler = useCallback(() => {
    setCount((prevCount) => ++prevCount);
  }, []);

  const fiboNum = useMemo(() => {
    console.log("useMemo is working");
    return fibonacci(count);
  }, [count]);

  return (
    <Context.Provider value={{ count, setter: setCount }}>
      <div>
        <button onClick={handler}>{count}</button>
        <Child />
        {/* lifting state up */}
        <button
          onClick={() => {
            setSecondCount(secondCount + 1);
          }}
        >
          second count - {secondCount}
        </button>
        <div>fibo num - {fiboNum}</div>
        <button onClick={() => setSecondCount((prev) => ++prev)}>
          2nd count
        </button>
      </div>
    </Context.Provider>
  );
}

const Child = React.memo(function Child() {
  const { count, setter } = useContext(Context);
  return (
    <div>
      <div>child component {count}</div>
      <button
        onClick={() => {
          setter(count + 1);
        }}
      >
        child component update
      </button>
      {/* <GrandChild /> */}
    </div>
  );
});

const GrandChild = function () {
  const count = useContext(Context);
  return <div>GrandChild {count}</div>;
};

export default App;

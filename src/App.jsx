import { Profiler } from "react";
import "./App.css";
import Todo from "./todo";
import Counter from "./useReducer";
import TodosApp from "./useSyncExternalStore";
// import ArtistPage from "./suspense";

function App() {
  console.log("it is working");
  return (
    <Profiler
      id="first-profiler"
      onRender={(...args) => {
        console.log(args);
      }}
    >
      <Todo />
      <Counter />
      <TodosApp />
      {/* <ArtistPage /> */}
    </Profiler>
  );
}
export default App;

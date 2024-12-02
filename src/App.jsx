import "./App.css";
import Todo from "./todo";
import Counter from "./useReducer";
import TodosApp from "./useSyncExternalStore";

function App() {
  return (
    <>
      <Todo />
      <Counter />
      <TodosApp />
    </>
  );
}
export default App;

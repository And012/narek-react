import { useCallback, useState } from "react";
import "./index.css";

function Item({ todo: { completed, text }, setTodos, index }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="list-item">
      <div className="delete-container">
        <button
          className="delete"
          onClick={() =>
            // delete todo
            setTodos((todos) => todos.filter((_, i) => i !== index))
          }
        >
          X
        </button>
        <input
          type="checkbox"
          checked={completed}
          onChange={() =>
            setTodos(
              (
                todos // mark it as completed
              ) =>
                todos.map((todo, i) => {
                  if (i === index) {
                    return { ...todo, completed: !completed };
                  }
                  return todo;
                })
            )
          }
        />
        {isEditing ? (
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <button className="edit" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </button>
        )}
      </div>
      <span>{text}</span>
    </div>
  );
}

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const setter = useCallback(() => {
    // add todo
    setTodos((prevValue) => [
      ...prevValue,
      { completed: false, text: inputValue },
    ]);
    setInputValue("");
  }, [setTodos, setInputValue, inputValue]);

  return (
    <div className="container">
      <div className="control">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setter();
            }
          }}
        />
        <button onClick={setter}>Add todo</button>
      </div>

      {todos.map((todo, index) => (
        <Item key={index} todo={todo} index={index} setTodos={setTodos} />
      ))}
    </div>
  );
}

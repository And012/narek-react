import { useCallback, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./index.css";

function Item({ todo: { completed, text }, setTodos, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");

  return (
    <div className="list-item">
      <div className="delete-container">
        <button
          className="delete"
          onClick={() => {
            // delete todo
            setTodos((todos) => {
              const newTodos = todos.filter((_, i) => i !== index);
              localStorage.setItem("todos", JSON.stringify(newTodos));
              return newTodos;
            });
          }}
        >
          X
        </button>
        <Checkbox
          checked={completed}
          onChange={() =>
            setTodos(
              (
                todos // mark it as completed
              ) => {
                const updatedTodos = todos.map((todo, i) => {
                  if (i === index) {
                    return { ...todo, completed: !completed };
                  }
                  return todo;
                });
                localStorage.setItem("todos", JSON.stringify(updatedTodos));
                return updatedTodos;
              }
            )
          }
        />
        {isEditing ? (
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTodos((prevTodos) => {
                  const newTodos = prevTodos.map((_, i) =>
                    i === index ? { ..._, text: editInputValue } : _
                  );
                  localStorage.setItem("todos", JSON.stringify(newTodos));
                  return newTodos;
                });
                setIsEditing(false);
              }
            }}
            value={editInputValue}
            onChange={(e) => {
              setEditInputValue(e.target.value);
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
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );
  const [inputValue, setInputValue] = useState("");

  const setter = useCallback(() => {
    // add todo to local storage in order to have it after reload
    const newTodos = [...todos, { completed: false, text: inputValue }];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    // update the todo state
    setTodos(newTodos);
    setInputValue("");
  }, [setTodos, setInputValue, inputValue, todos]);

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

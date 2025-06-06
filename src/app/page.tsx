"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <div className="card todo-card">
        <h1 className="todo-title">To-Do List</h1>

        <form className="todo-form" onSubmit={addTask}>
          <input
            className="todo-input"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter a task"
          />
          <button className="todo-button" type="submit" aria-label="Add Task">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="icon icon-add"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </form>

        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              <span className="task-text">{task}</span>
              <button
                className="todo-button delete-button"
                onClick={() => deleteTask(index)}
                aria-label={`Delete task: ${task}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon icon-delete"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .todo-card {
          padding: 2rem;
          max-width: 480px;
          margin: 2rem auto;
          background: #121417;
          border-radius: 1rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          color: #f1f2f4;
        }

        .todo-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }

        .todo-form {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .todo-input {
          flex-grow: 1;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: none;
          font-size: 1.1rem;
          outline: none;
          background: #e0e0e0;
          color: #121417;
          transition: box-shadow 0.3s ease;
        }

        .todo-input:focus {
          box-shadow: 0 0 0 3px #0070f3;
        }

        .todo-button {
          background: #0070f3;
          border: none;
          color: white;
          border-radius: 0.5rem;
          padding: 0.65rem 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .todo-button:hover {
          background: #005bb5;
        }

        .todo-button:focus {
          outline: 3px solid #0070f3;
          outline-offset: 2px;
        }

        .delete-button {
          background: #e00;
          padding: 0.35rem 0.5rem;
        }

        .delete-button:hover {
          background: #b00000;
        }

        .todo-list {
          list-style: none;
          padding-left: 0;
          margin-top: 1.5rem;
        }

        .todo-item {
          display: flex;
          justify-content: space-between;
          background: #1e1e1e;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 0.75rem;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }

        .task-text {
          word-break: break-word;
          max-width: 80%;
        }

        .icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Responsive */
        @media (max-width: 500px) {
          .todo-card {
            margin: 1rem;
            padding: 1.5rem;
          }

          .todo-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .todo-input {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

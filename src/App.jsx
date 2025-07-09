import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todoo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (todoo.trim() !== '') {
      setTodos([...todos, todoo]);
      setTodo('');
    }
  };

  const deleteTodo = (ind) => {
    const updated = todos.filter((_, i) => i !== ind);
    setTodos(updated);
    if (isEditing && editIndex === ind) {
      setIsEditing(false);
      setEditText('');
      setEditIndex(null);
    }
  };

  const startEdit = (ind) => {
    setIsEditing(true);
    setEditText(todos[ind]);
    setEditIndex(ind);
  };

  const applyEdit = () => {
    if (editText.trim() !== '') {
      const updatedTodos = todos.map((item, i) =>
        i === editIndex ? editText : item
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditText('');
      setEditIndex(null);
    }
  };

  return (
    <div className="app-container">
      <h2 className="title">📝 Todo App</h2>

      {/* Add Section */}
      <div className="input-group">
        <label>
          Add Todo:
          <input
            type="text"
            className="input-field"
            value={todoo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task..."
          />
        </label>
        <button className="btn add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      {/* Edit Section */}
      {isEditing && (
        <div className="input-group">
          <label>
            Edit Todo:
            <input
              type="text"
              className="input-field"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder="Edit selected task..."
            />
          </label>
          <button className="btn update-btn" onClick={applyEdit}>
            Update
          </button>
        </div>
      )}

      {/* Todo List */}
      <ul className="todo-list">
        <h3>Todo List</h3>
        {todos.map((item, ind) => (
          <li key={ind} className="todo-item">
            <span>{item}</span>
            <div className="btn-group">
              <button className="btn edit-btn" onClick={() => startEdit(ind)}>
                Edit
              </button>
              <button className="btn delete-btn" onClick={() => deleteTodo(ind)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

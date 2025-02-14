import React from 'react';

function Todo({ task, onDelete }) {
  return (
    <div className="todo">
      <p>{task}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

function Task({ task }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask(task.id, newDesc));
    setEditMode(false);
  };

  return (
    <li>
      {editMode ? (
        <>
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.isDone ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </li>
  );
}

export default Task;
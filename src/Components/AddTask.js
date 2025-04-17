import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim()) {
      dispatch(addTask({ id: uuidv4(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
import { useState } from 'react';
import './App.css';
import myImage from './assets/icons8-trash.svg'

function App() {
  const [addItem, setAddItem] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (addItem.trim() === '') return;
    setTasks([...tasks, addItem]);
    setAddItem('');
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h1 className="title">todos</h1>

      <div className="input-wrapper">
        <input
          type="text"
          id="addItem"
          value={addItem}
          placeholder="Add todo..."
          onChange={(e) => setAddItem(e.target.value)}
        />
        <button onClick={handleAdd} className="add-icon">+</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="left">
              <input type="square-icon" className='square-icon'/>
              <span>{task}</span>
            </div>
            <button onClick={() => handleDelete(index)} className="delete-icon"><img src={myImage} alt="Description" width="20" /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

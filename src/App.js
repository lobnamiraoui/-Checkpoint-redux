import React from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
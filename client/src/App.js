import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Word in German</label>
        <input type="text" name="german" />
        <label>Word in English</label>
        <input type="text" name="english" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;

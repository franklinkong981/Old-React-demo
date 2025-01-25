import React from 'react';
import './App.css';

import Counter from "./Counter.jsx";

function App() {

  return (
    <div className="App">
      <Counter color="purple" initialValue={10}/>
    </div>
  )
}

export default App;

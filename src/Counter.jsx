import React, { useState } from 'react';
import './Counter.css'; // Assuming you have a Counter.css file

function Counter() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  return (
    <div className="counter-container">
      <button
        className="toggle-button"
        onClick={() => setShowCount(!showCount)}
      >
        {showCount ? 'Hide The Count' : 'Show The Count'}
      </button>
      {showCount ? (
        <div className="counter-content">
          <h2>Counter Show Open</h2>
          <h2>Counter Is - <span className="count-number">{count}</span></h2>
          <div className="button-group">
            <button className="counter-button increment" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="counter-button decrement" onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Counter;

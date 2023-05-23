import "./App.css";
import { useState } from "react";

function App() {
  // [state, setState] = useState(initialState);
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>COUNT</h1>
      <h1>{count}</h1>
      <button
        className="plus1"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <h1>+1</h1>
      </button>
      <button
        className="multi3"
        onClick={() => {
          setCount(count * 3);
        }}
      >
        <h1>x3</h1>
      </button>
      <button
        className="menos10"
        onClick={() => {
          setCount(count - 10);
        }}
      >
        <h1>-10</h1>
      </button>
      <button
        className="root"
        onClick={() => {
          if (count <= 0) {
            alert("You can not square root a negative number");
          } else {
            setCount(Math.round(Math.sqrt(count)));
          }
        }}
      >
        <h1>√</h1>
      </button>
      <button
        className="restart"
        onClick={() => {
          setCount(10);
        }}
      >
        <h1>Restart</h1>
      </button>
    </div>
  );
}

export default App;

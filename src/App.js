import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decriment = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <div>
        <button onClick={Increment} style={{fontSize:26}}>Increment</button>
        <button onClick={Decriment} style={{fontSize:26, marginLeft:10}}>Decriment</button>
      </div>
    </div>
  );
}

export default App;

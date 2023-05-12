import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800 flex-col gap-10">
      <div className="text-blue-500 font-medium text-2xl">Increment & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-4xl text-gray-600">
        <button onClick={decreaseHandler}>-</button>
        <div>{count}</div>
        <button onClick={increaseHandler}>+</button>
      </div>
      <button onClick={resetHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reset</button>
    </div>
  );
}

export default App;

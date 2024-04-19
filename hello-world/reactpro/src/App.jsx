import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  //const [count, setCount] = useState(0);
  const person = {
    name: "John",
    message: "Hello ",
    seatNumbers: [1, 2, 4],
  };
  return (
    <div className="App">
      <Hello person={person} />
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Counter />
    </div>
  );
}

export default App;

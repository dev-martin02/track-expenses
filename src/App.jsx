import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";

function App() {
  const [balance, setBalance] = useState(0);
  const [inputAmount, setInputAmount] = useState("");
  const [userAction, setUserAction] = useState("expense");

  // Set values
  const getValueInput = (e) => {
    let value = parseInt(e.target.value);
    setInputAmount(value);
  };
  const getSelectValue = (e) => {
    setUserAction(e.target.value);
  };

  // Operations
  const restBalance = () => {
    setBalance(balance - inputAmount);
  };

  const addBalance = () => {
    setBalance(balance + inputAmount);
  };

  //Functionality
  const action = () => {
    switch (userAction) {
      case "income":
        addBalance();
        setInputAmount("");
        break;

      case "expense":
        restBalance();
        setInputAmount("");
        break;

      default:
        console.log("Sorry you have to select one");
    }
  };

  return (
    <div id="container">
      <div id="user-money">
        <select name="activity" id="activity" onChange={getSelectValue}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input type="number" value={inputAmount} onChange={getValueInput} />
        <button onClick={action}>Add</button>
        <div>
          <Task />
        </div>
      </div>
      <div id="current-balance">
        <h2>{`$${balance}`}</h2>
        <span>Current Balance</span>
      </div>
    </div>
  );
}

export default App;

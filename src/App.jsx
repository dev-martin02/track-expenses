import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";
import InputLog from "./components/inputLog/InputLog";
import UserBalance from "./components/userBalance/UserBalance";

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
        <InputLog
          getValueInput={getValueInput}
          getSelectValue={getSelectValue}
          inputAmount={inputAmount}
          action={action}
        />
        <Task />
      </div>
      <UserBalance balance={balance} />
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <>
      <div id="user-money">
        <select name="activity" id="activity">
          <option value="food">Food</option>
          <option value="income">Income</option>
        </select>
        <input type="number" />
        <button>Add</button>
      </div>
      <div id="current-balance">
        <p>$0.00</p>
        <span>Current Balance</span>
      </div>
    </>
  );
}

export default App;

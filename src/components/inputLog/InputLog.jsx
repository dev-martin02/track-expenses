import "./InputLog.css";

export default function InputLog({
  userAction,
  getSelectValue,
  getValueInput,
  inputAmount,
  action,
}) {
  console.log(userAction);
  function displayCatergory() {
    if (userAction === "expense") {
      return true;
    }
    return false;
  }
  return (
    <div>
      <select
        name="activity"
        onChange={getSelectValue}
        id={userAction === "expense" ? "expense" : "income"}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {displayCatergory() && (
        <select name="catergories" id="categories">
          <option value="food">Food</option>
          <option value="bill">Bills</option>
        </select>
      )}
      <input type="number" value={inputAmount} onChange={getValueInput} />
      <button onClick={action}>Add</button>
    </div>
  );
}

import "./InputLog.css";

export default function InputLog({
  userAction,
  getSelectValue,
  getValueInput,
  inputAmount,
  action,
}) {
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
      <input type="number" value={inputAmount} onChange={getValueInput} />
      <button onClick={action}>Add</button>
    </div>
  );
}

export default function InputLog({
  getSelectValue,
  getValueInput,
  inputAmount,
  action,
}) {
  return (
    <div>
      <select name="activity" id="activity" onChange={getSelectValue}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input type="number" value={inputAmount} onChange={getValueInput} />
      <button onClick={action}>Add</button>
    </div>
  );
}

export default function InputLog({
  getSelectValue,
  getValueInput,
  inputAmount,
  action,
}) {
  // TODO: Expenses & Income should have a different background color

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

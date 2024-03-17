export default function UserBalance({ balance }) {
  return (
    <div id="current-balance">
      <h2>{`$${balance}`}</h2>
      <span>Current Balance</span>
    </div>
  );
}

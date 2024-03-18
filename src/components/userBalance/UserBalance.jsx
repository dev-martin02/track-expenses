export default function UserBalance({ balance }) {
  // TODO: Add an Array which going to log the last 3 aactivityes that had affect the balance
  return (
    <div id="current-balance">
      <h2>{`$${balance}`}</h2>
      <span>Current Balance</span>
    </div>
  );
}

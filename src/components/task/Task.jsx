import { useState } from "react";
import "./task.css";

export default function Task() {
  const [focus1, setFocus1] = useState();
  const [focus2, setFocus2] = useState();
  const [focus3, setFocus3] = useState();

  const initialText = "My biggest bills are...";
  return (
    <div id="biggestBillsSection">
      <h2>Biggest Bills</h2>
      <input
        value={focus1}
        onChange={(e) => setFocus1(e.target.value)}
        placeholder={initialText}
        className="bills"
      />
      <input
        value={focus2}
        onChange={(e) => setFocus2(e.target.value)}
        className="bills"
        placeholder={initialText}
      />
      <input
        value={focus3}
        onChange={(e) => setFocus3(e.target.value)}
        className="bills"
        placeholder={initialText}
      />
    </div>
  );
}

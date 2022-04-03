import React, { useState } from "react";

export function SuitsPick() {
  const [suitsPick, setSuitsPick] = useState();
  const [suits] = React.useState([
    { option: "Pick your suit", value: "Pick your suit", id: 1 },
    { option: "Soft Suit", value: "Soft Suit", id: 2 },
    { option: "Hardshell Suit", value: "Hardshell Suit", id: 3 },
    { option: "Hybrid Suit", value: "Hybrid Suit", id: 4 },
    { option: "Skintight Suit", value: "Skintight Suit", id: 5 },
  ]);
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Suit selected", suitsPick);
  }

  function handleChange(e: any) {
    setSuitsPick(e.target.value);
    console.log("suit picked", e.target.value);
  }
  return (
    <div className="optionsDrop">
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {suits.map((s) => (
            <option key={s.id} value={s.value}>
              {s.option}
            </option>
          ))}
        </select>
        <div>
          {/* <button className="btn btn-success">Pick suit</button> */}
        </div>
      </form>
    </div>
  );
}

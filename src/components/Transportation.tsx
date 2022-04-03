import React, { useState } from "react";

export function Transportation() {
  const [transportation, setTransportation] = useState();
  const [transportations] = React.useState([
    {
      option: "Pick your transportation",
      value: "Pick your transportation",
      id: 1,
    },
    { option: "SpaceX", value: 1200, id: 2 },
    { option: "Virgin Galactic", value: 1000, id: 3 },
    { option: "NASA", value: 500, id: 4 },
  ]);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("transportation", transportation);
  }
  function handleChange(e: any) {
    setTransportation(e.target.value);
    console.log("location picked", e.target.value);
  }
  return (
    <div className="optionsDrop">
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {transportations.map((t) => (
            <option key={t.id} value={t.value}>
              {t.option}
            </option>
          ))}
        </select>
        <div>
          {/* <button className="btn btn-success">Add Transportation</button> */}
        </div>
      </form>
    </div>
  );
}

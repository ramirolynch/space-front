import React, { useState } from "react";

export function LocationPick() {
  const [locationsPick, setLocationsPick] = useState();
  const [locations] = React.useState([
    { option: "Pick your location", value: "pick your location", id: 1 },
    { option: "North Mars", value: "168 million miles", id: 2 },
    { option: "East Mars", value: "172 million miles", id: 3 },
    { option: "South Mars", value: "156 million miles", id: 4 },
    { option: "West Mars", value: "189 million miles", id: 5 },
  ]);
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("transportation", locationsPick);
  }

  function handleChange(e: any) {
    setLocationsPick(e.target.value);
    console.log("location picked", e.target.value);
  }

  return (
    <div className="optionsDrop">
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {locations.map((l) => (
            <option key={l.id} value={l.value}>
              {l.option}
            </option>
          ))}
        </select>
        <div>
          {/* <button className="btn btn-success">Add Location</button> */}
        </div>
      </form>
    </div>
  );
}

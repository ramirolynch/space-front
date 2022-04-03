import React, { useState } from "react";

export function Vaccine() {
  const [vaccine, setVaccine] = useState();
  const [vaccines] = React.useState([
    { option: "Pick your location", value: "pick your location", id: 5 },
    { option: "Phobos Virus", value: "Phobos Virus", id: 1 },
    { option: "Deimos Virus", value: "Deimos Virus", id: 2 },
    { option: "Crimson Virus", value: "Crimson Virus", id: 3 },
    { option: "Quatro Virus", value: "Quatro Virus", id: 4 },
  ]);
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Vaccine", vaccine);
  }

  function handleChange(e: any) {
    setVaccine(e.target.value);
    console.log("Vaccine selected", e.target.value);
  }

  return (
    <div className="optionsDrop">
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {vaccines.map((v) => (
            <option key={v.id} value={v.value}>
              {v.option}
            </option>
          ))}
        </select>
        <div>
          {/* <button className="btn btn-success">Add Vaccine</button> */}
        </div>
      </form>
    </div>
  );
}

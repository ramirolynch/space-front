import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { VaccineFace } from "../models/VaccineModel";
import { fetchVaccines } from "../services/SpaceTravelApi";

export function Vaccine() {

  const [vaccines, setVaccines] = useState<VaccineFace[]>([])
  
  useEffect(()=>{
    fetchVaccines().then(data => setVaccines(data));

  }, []);
  
  const [vaccine, setVaccine] = useState<any>();
  const { addUserVaccine } = useContext(SpaceContext);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Vaccine", vaccine);
  }

  function handleChange(e: any) {
    setVaccine(e.target.value);
    addUserVaccine(vaccine)
    console.log("Vaccine selected", e.target.value);
  }

  return (
    <div className="optionsDrop">
     
        <select value={vaccine} onChange={handleChange}>

          {vaccines.map((v) => (
            <option key={v.id} value={v.vaccine_name}>
              {v.vaccine_name}
            </option>
          ))}

        </select>
        <div>
          {/* <button className="btn btn-success">Add Vaccine</button> */}
        </div>

    </div>
  );
}

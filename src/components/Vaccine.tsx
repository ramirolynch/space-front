import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { VaccineFace } from "../models/VaccineModel";
import { fetchVaccines } from "../services/SpaceTravelApi";

export function Vaccine(props:{onChange:(vaccine:string)=>void}) {

  const [vaccines, setVaccines] = useState<VaccineFace[]>([])
  
  useEffect(()=>{
    fetchVaccines().then(data => setVaccines(data));

  }, []);
  

 

  function handleChange(e: any) {
    props.onChange(e.target.value);
    console.log("Vaccine selected", e.target.value);
  }

  return (
    <div className="optionsDrop">
     <form>
        <select onChange={handleChange}>

          {vaccines.map((v) => (
            <option key={v.id} value={v.vaccine_name}>
              {v.vaccine_name}
            </option>
          ))}

        </select>
    </form>
  
    </div>
  );
}

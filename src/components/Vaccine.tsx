import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { VaccineFace } from "../models/VaccineModel";
import { fetchVaccines } from "../services/SpaceTravelApi";

export function Vaccine(props:{onChange:(vaccine:string)=>void}) {

  const [vaccines, setVaccines] = useState<VaccineFace[]>([])
  const {vaccine_choice, addVaccineChoice} = useContext(SpaceContext)

  
  
  useEffect(()=>{
    fetchVaccines().then(data => setVaccines(data));

  }, []);
  


  return (
    <div className="optionsDrop">
      <form>
      <select value={vaccine_choice} defaultValue={"default"} onChange={(e:any)=>{addVaccineChoice(e.target.value)}}>
   
        <option value={"default"} disabled>
          Choose Vaccine
         </option>
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

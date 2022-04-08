import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { LocationFace } from "../models/LocationModel";
import { fetchLocations, fetchTransportation } from "../services/SpaceTravelApi";

export function LocationPick(props:{onChange:(locationsPick:string)=>void}) {

  const [locations, setLocations] = useState<LocationFace[]>([])
  
  useEffect(()=>{
    fetchLocations().then(data => setLocations(data));

  }, []);

  const [choice, setChoice] = useState();


  function handleChange(e: any) {
 
    props.onChange(e.target.value);
    console.log("location picked", e.target.value);
    setChoice(e.target.value)
  }

  return (
    <div className="optionsDrop">
     <form>
        <select value={choice} defaultValue={"default"} onChange={handleChange}>
        <option value={"default"} disabled>
          Choose Location
         </option>
          {locations.map((l) => (
            <option key={l.id} value={l.location_name}>
              {l.location_name}
            </option>
          ))}
        </select>
      </form>
      
    </div>
  );
}

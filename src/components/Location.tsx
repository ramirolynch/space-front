import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { LocationFace } from "../models/LocationModel";
import { fetchLocations} from "../services/SpaceTravelApi";

export function LocationPick(props:{onChange:(locationPick:string)=>void}) {

  const [locations, setLocations] = useState<LocationFace[]>([])
 const {location_choice, addLocationChoice} = useContext(SpaceContext)
  
  useEffect(()=>{
    fetchLocations().then(data => setLocations(data));

  }, []);

  return (
    <div className="optionsDrop">
     <form>
        <select value={location_choice} defaultValue={"default"} onChange={(e:any)=>{addLocationChoice(e.target.value)}}>
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

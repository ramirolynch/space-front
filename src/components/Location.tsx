import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { LocationFace } from "../models/LocationModel";
import { fetchLocations, fetchTransportation } from "../services/SpaceTravelApi";

export function LocationPick() {

  const [locations, setLocations] = useState<LocationFace[]>([])
  
  useEffect(()=>{
    fetchLocations().then(data => setLocations(data));

  }, []);

  const [locationsPick, setLocationsPick] = useState<any>();

  const { addLocation } = useContext(SpaceContext);
 

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("transportation", locationsPick);
  }

  function handleChange(e: any) {
    setLocationsPick(e.target.value);
    addLocation(locationsPick)
    console.log("location picked", e.target.value);
  }

  return (
    <div className="optionsDrop">
     
        <select value={locationsPick} onChange={handleChange}>
          {locations.map((l) => (
            <option key={l.id} value={l.location_name}>
              {l.location_name}
            </option>
          ))}
        </select>
        <div>
          {/* <button className="btn btn-success">Add Location</button> */}
        </div>
    </div>
  );
}

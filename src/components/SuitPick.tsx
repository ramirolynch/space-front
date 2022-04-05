import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { SpaceContextProvider } from "../context/SpaceContextModel";
import { SuitFace } from "../models/SuitModel";
import { fetchSuits } from "../services/SpaceTravelApi";

export function SuitsPick() {
  
  const { addSuit } = useContext(SpaceContext);
  
  const [spacesuits, setSpaceSuits] = useState<SuitFace[]>([])
  
  useEffect(()=>{
    fetchSuits().then(data => setSpaceSuits(data));
  }, []);

  const [suitsPick, setSuitsPick] = useState<any>();

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Suit selected", suitsPick);
  }

  function handleChange(e: any) {
    setSuitsPick(e.target.value);
    addSuit(suitsPick)
    console.log("suit picked", e.target.value);
  }
  return (
    <div className="optionsDrop">
     
        <select value={suitsPick} onChange={handleChange}>
          {spacesuits.map((s) => (
            <option key={s.id} value={s.suit_name}>
              {s.suit_name}
            </option>
          ))}
        </select>
        <div>
          {/* <button className="btn btn-success">Pick suit</button> */}
        </div>
    </div>
  );
}

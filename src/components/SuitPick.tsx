import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { SpaceContextProvider } from "../context/SpaceContextModel";
import { SuitFace } from "../models/SuitModel";
import { fetchSuits } from "../services/SpaceTravelApi";

export function SuitsPick(props:{onChange:(suitsPick:string)=>void}) {

  
  const [spacesuits, setSpaceSuits] = useState<SuitFace[]>([])
  const [choice, setChoice] = useState();
  
  useEffect(()=>{
    fetchSuits().then(data => setSpaceSuits(data));
  }, []);


  function handleChange(e: any) {
 
    props.onChange(e.target.value);
    console.log("suit picked", e.target.value);
    setChoice(e.target.value)
  }

  

  return (
    <div className="optionsDrop">
     <form>
        <select value={choice} defaultValue={"default"} onChange={handleChange}>
        <option value={"default"} disabled>
          Choose Space Suit
         </option>
          
          {spacesuits.map((s) => (
            <option key={s.id} value={s.suit_name}>
              {s.suit_name}
            </option>
          ))}
        </select>
 </form>
   
    </div>
  );
}

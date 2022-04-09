import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { SpaceContextProvider } from "../context/SpaceContextModel";
import { SuitFace } from "../models/SuitModel";
import { fetchSuits } from "../services/SpaceTravelApi";

export function SuitsPick(props:{onChange:(suitsPick:string)=>void}) {

  
  const [spacesuits, setSpaceSuits] = useState<SuitFace[]>([])
  const {suit_choice, addSuitChoice} = useContext(SpaceContext)

  
  useEffect(()=>{
    fetchSuits().then(data => setSpaceSuits(data));
  }, []);


  return (
    <div className="optionsDrop">
      <form>
      <select value={suit_choice} onChange={(e:any)=>{addSuitChoice(e.target.value)}}>
        <option>
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

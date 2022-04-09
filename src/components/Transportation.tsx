import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { TransportFace } from "../models/TransportModel";
import { fetchTransportation } from "../services/SpaceTravelApi";

export function Transportation(props:{onChange:(transportation:string)=>void}) {

  const [transports, setTransports] = useState<TransportFace[]>([])
  const {transport_choice, addTransportChoice} = useContext(SpaceContext)
 
  
  useEffect(()=>{
    fetchTransportation().then(data => setTransports(data));

  }, []);

  return (
    <div className="optionsDrop">
      <form>
      <select value={transport_choice} onChange={(e:any)=>{addTransportChoice(e.target.value)}}>
        <option>
          Choose Transportation
         </option>
          
          {transports.map((t) => (
            <option key={t.id} value={t.company_name}>
              {t.company_name}
            </option>
          ))}
        </select>
    </form>
  
    </div>
  );
}

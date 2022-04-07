import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { TransportFace } from "../models/TransportModel";
import { fetchTransportation } from "../services/SpaceTravelApi";

export function Transportation(props:{onChange:(transportation:string)=>void}) {

  const [transports, setTransports] = useState<TransportFace[]>([])
  
  useEffect(()=>{
    fetchTransportation().then(data => setTransports(data));

  }, []);

  function handleChange(e: any) {

    props.onChange(e.target.value);
    console.log("location picked", e.target.value);
  }
  return (
    <div className="optionsDrop">
    <form>
        <select onChange={handleChange}>
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

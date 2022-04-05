import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { TransportFace } from "../models/TransportModel";
import { fetchTransportation } from "../services/SpaceTravelApi";

export function Transportation() {

  const [transports, setTransports] = useState<TransportFace[]>([])
  
  useEffect(()=>{
    fetchTransportation().then(data => setTransports(data));

  }, []);

  const [transportation, setTransportation] = useState<any>();

  const { addUserTransport } = useContext(SpaceContext);


  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("transportation", transportation);
  }
  function handleChange(e: any) {
    setTransportation(e.target.value);
    addUserTransport(transportation)
    console.log("location picked", e.target.value);
  }
  return (
    <div className="optionsDrop">
    
        <select value={transportation} onChange={handleChange}>
          {transports.map((t) => (
            <option key={t.id} value={t.company_name}>
              {t.company_name}
            </option>
          ))}
        </select>
        <div>
          {/* <button className="btn btn-success">Add Transportation</button> */}
        </div>
    </div>
  );
}

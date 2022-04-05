import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchTrips } from "../services/SpaceTravelApi";
import { Trip } from "../models/TripModel";
import { SingleTrip } from "./Trip";

export function TripsBook() {
  const [departure, setDeparture] = useState(new Date());
  let [arrival, setArrival] = useState(new Date());
  
  const [trips, setTrips] = useState<Trip[]>([])
  
  useEffect(()=>{
    fetchTrips().then(data => setTrips(data));

}, []);
  
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("departure date", departure);
    console.log("arrival date", arrival);
  }

  function verifyArrival(e: any) {
    setArrival(e);
    if (e !== new Date() && e <= departure) {
      alert("please select arrival date after departure date");
    }
    arrival = e;
  }

  let navigate = useNavigate();
  function backToMarsTripPage() {
    navigate("/getTripDetails");
  }


  return (
    <div className="optionsDrop">
      <button className="leftArrow">
        <FaArrowLeft onClick={backToMarsTripPage}></FaArrowLeft>
      </button>
      <form onSubmit={handleSubmit}>
        <h3>
          <div className="departureHead">
            <i className="departureDate"> Departure Date </i>
            <DatePicker
              className="departure"
              onChange={setDeparture}
              value={departure}
            />
          </div>
          <div className="arrivalHead">
            <i className="arrivalDate"> Arrival Date </i>
            <DatePicker
              className="arrival"
              onChange={verifyArrival}
              value={arrival}
            />
          </div>
        </h3>
        {/* <FaArrowDown /> */}
        <div>{/* <button className="btn btn-success">Add Trip</button> */}</div>
      </form>
      {trips.map((trip,i) => <SingleTrip key={i} trip={trip}/>)}
    </div>
  );
}

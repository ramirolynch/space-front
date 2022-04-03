import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function TripsBook() {
  const [departure, setDeparture] = useState(new Date());
  const [arrival, setArrival] = useState(new Date());

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("departure date", departure);
    console.log("arrival date", arrival);
  }

  let navigate = useNavigate();
  function backToMarsTripPage() {
    navigate("/");
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
              onChange={setArrival}
              value={arrival}
            />
          </div>
        </h3>
        {/* <FaArrowDown /> */}
        <div>{/* <button className="btn btn-success">Add Trip</button> */}</div>
      </form>
    </div>
  );
}

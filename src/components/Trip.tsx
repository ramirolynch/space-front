import { Trip } from "../models/TripModel";
import moment from "moment";
import { FaRocket } from "react-icons/fa";
import {IconContext} from "react-icons"
import { SelectedTrip } from "./SelectedTrip";
import { useNavigate } from "react-router-dom";
import { SpaceContext } from "../context/SpaceContext";
import { useContext } from "react";

interface Props {
  trip: Trip;
}

export function SingleTrip({ trip }: Props) {
  
  const {addSelectedTrip} = useContext(SpaceContext)


  
  return (
    <IconContext.Provider value={{ style: { marginLeft: "10px" } }}>
      <div className="TripItem">
        <ul>
          <li>
            <h3 style={{ display: "inline" }}> Departure Date:</h3>
            {moment(trip.departure_date).format("MM/DD/YYYY")}
          </li>
          <li>
            <h3 style={{ display: "inline" }}> Arrival Date:</h3>
            {moment(trip.arrival_date).format("MM/DD/YYYY")}
          </li>
          <li>
            <h3 style={{ display: "inline" }}>
              Trip time (Terrestrial Hours):
            </h3>
            {trip.trip_time}
          </li>
          <li>
            <h3 style={{ display: "inline" }}>Transportation Company:</h3>
            {trip.company_name}
          </li>
          <li>
            <h3 style={{ display: "inline" }}>Trip Price:</h3>
            {trip.price}
          </li>
          <li>
            <h3 style={{ display: "inline" }}>Destination:</h3>
            {trip.location_name}
          </li>
          <li>
            <h3 style={{ display: "inline" }}>Distance:</h3>
            {trip.distance} {trip.unit_of_measure}
          </li>
          <li>
            <h3 style={{ display: "inline" }}>Space Suit Type:</h3>
            {trip.space_suit_name}
          </li>
        </ul>

        <button className="liftOff" onClick={()=>addSelectedTrip(trip.id)}>
          Lift-Off
          <FaRocket />
        </button>
      </div>
    </IconContext.Provider>
  );
}

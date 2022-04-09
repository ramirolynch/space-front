import { Trip } from "../models/TripModel";
import moment from "moment";
import { FaRocket } from "react-icons/fa";
import {IconContext} from "react-icons"
import { useNavigate } from "react-router-dom";

interface Props {
  trip: Trip;
}


export function SelectedTrip(trip:Trip) {

    function onClickHandler(id:number) {
    
}
  return (
    <IconContext.Provider value={{ style: {marginLeft: '10px'}}}>
    <div className="TripItem">
      <ul>
        <li>
          Departure Date: {moment(trip.departure_date).format("MM/DD/YYYY")}
        </li>
        <li>Arrival Date: {moment(trip.arrival_date).format("MM/DD/YYYY")}</li>
        <li>Trip time (Terrestrial Hours): {trip.trip_time}</li>
        <li>Transportation Company: {trip.company_name}</li>
        <li>Trip Price: {trip.price}</li>
        <li>Destination: {trip.location_name}</li>
        <li>Distance: {trip.distance} {trip.unit_of_measure}</li>
        <li>Space Suit Type: {trip.space_suit_name}</li>
      </ul>
     
              <button onClick={() => {onClickHandler(trip.id)}}>Lift-Off<FaRocket /></button>

    </div>
    </IconContext.Provider>
  );
}

import { Trip } from "../models/TripModel";
import moment from "moment";
import { FaRocket } from "react-icons/fa";
import {IconContext} from "react-icons"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { fetchTrip } from "../services/SpaceTravelApi";
import { SpaceContext } from "../context/SpaceContext";



export function SelectedTrip() {

  const { selected_trip } = useContext(SpaceContext)
  
  const [mytrip, setMyTrip] = useState<Trip>()

  useEffect(() => {

  fetchTrip(selected_trip).then((data)=>setMyTrip(data))      

  });

  
  
  return (
    <IconContext.Provider value={{ style: {marginLeft: '10px'}}}>
    <div className="TripItem">
      <ul>
        <li>
          Departure Date: {moment(mytrip?.departure_date).format("MM/DD/YYYY")}
        </li>
        <li>Arrival Date: {moment(mytrip?.arrival_date).format("MM/DD/YYYY")}</li>
        <li>Trip time (Terrestrial Hours): {mytrip?.trip_time}</li>
        <li>Transportation Company: {mytrip?.company_name}</li>
        <li>Trip Price: {mytrip?.price}</li>
        <li>Destination: {mytrip?.location_name}</li>
        <li>Distance: {mytrip?.distance} {mytrip?.unit_of_measure}</li>
        <li>Space Suit Type: {mytrip?.space_suit_name}</li>
      </ul>
     
              <button>Lift-Off<FaRocket /></button>

    </div>
    </IconContext.Provider>
  );
}

import { useContext, useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { TripsBook } from "./Booktrip";
import { LocationPick } from "./Location";
import { SuitsPick } from "./SuitPick";
import { Transportation } from "./Transportation";
import { Vaccine } from "./Vaccine";
import { useNavigate } from "react-router-dom";
import { Trip } from "../models/TripModel";
import {
  fetchSearch
} from "../services/SpaceTravelApi";
import { SingleTrip } from "./Trip";
import { SpaceContext } from "../context/SpaceContext";


export function MarsTrip() {


 const {addPreferredTrips, preferred_trips} = useContext(SpaceContext)

  const [suitPick, setSuitPick] = useState<string>("");
  const [locationPick, setLocationPick] = useState<string>("");
  const [transportPick, setTransportPick] = useState<string>("");
  const [vaccinePick, setVaccinePick] = useState<string>("");
  let navigate = useNavigate();

  // useEffect(() => {
  //   fetchSearch(transportPick,suitPick,locationPick).then((data) => addPreferredTrips(data));
  
  // }, [transportPick,suitPick,locationPick]);

  function handleClick(e: any) {
    e.preventDefault();
    fetchSearch(transportPick, suitPick, locationPick).then((data) => addPreferredTrips(data))

    console.log(preferred_trips)
    

    // search for available trips matching preferences
    // we need to use suit_preferred, location_preferred, user_vaccine and transport_preferred which come from context
    navigate("/showTrip");

  }


  function showTrip() {
  
  }

  function setSuitHandler(suitPick: string) {
    setSuitPick(suitPick);
  }

  function setLocationsHandler(locationPick: string) {
    setLocationPick(locationPick);
  }

  function setTransportationHandler(transport: string) {
    setTransportPick(transport);
  }

  function setVaccineHandler(vaccine: string) {
    setVaccinePick(vaccine);
  }

  function handleLogout() {
    const saved = localStorage.getItem("userLogin");
    if (saved === "true") {
      localStorage.removeItem("userLogin");
    }
    navigate("/login");
  }

  const Results = () => (
    <div className="resultsDropdown">
      <SuitsPick
        onChange={(suitsPick) => setSuitHandler(suitsPick)}
      ></SuitsPick>
      <LocationPick
        onChange={(locationsPick) => setLocationsHandler(locationsPick)}
      ></LocationPick>
      <Transportation
        onChange={(transportation) => setTransportationHandler(transportation)}
      ></Transportation>
      <Vaccine onChange={(vaccine) => setVaccineHandler(vaccine)}></Vaccine>

      <div className="trip">
        <button className="bookTrip" type="submit" onClick={handleClick}>
          See Available Trips
        </button>
      </div>
    </div>
  );
  return (
    <div className="marsHeader">
      <h1 className="goMars">Thinking About Going To Mars</h1>
      <div className="logHide">
        <div className="logout" onClick={handleLogout}>
          <FaSignOutAlt />
        </div>
        <div className="hide">Logout</div>
      </div>
      <div className="results">
        <Results />
      </div>

    </div>
  );
}

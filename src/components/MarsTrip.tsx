import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { TripsBook } from "./Booktrip";
import { LocationPick } from "./Location";
import { SuitsPick } from "./SuitPick";
import { Transportation } from "./Transportation";
import { Vaccine } from "./Vaccine";
import { useNavigate } from "react-router-dom";
import { Trip } from "../models/TripModel";
import {
  fetchLocations,
  fetchTransportation,
  fetchTrips,
  fetchVaccines,
} from "../services/SpaceTravelApi";
import { SpaceContext } from "../context/SpaceContext";
import { SingleTrip } from "./Trip";
import { TransportFace } from "../models/TransportModel";
import { VaccineFace } from "../models/VaccineModel";
import { LocationFace } from "../models/LocationModel";

export function MarsTrip() {
  // const [showResults, setShowResults] = useState(false);
  // const onClick = () => {
  //   if (showResults) {
  //     setShowResults(false);
  //   } else {
  //     setShowResults(true);
  //   }
  // };

  const [trips, setTrips] = useState<Trip[]>([]);

  const [vaccinearr, setVaccineArr] = useState<VaccineFace[]>([]);
  const [locationsarr, setLocationsArr] = useState<LocationFace[]>([]);

  const [preferredtrips, setPreferredTrips] = useState<Trip[]>([]);

  const [suitPick, setSuitPick] = useState<string>();
  const [locationPick, setLocationPick] = useState<string>();
  const [transportPick, setTransportPick] = useState<string>();
  const [vaccinePick, setVaccinePick] = useState<string>();

  useEffect(() => {
    fetchTrips().then((data) => setTrips(data));
    fetchVaccines().then((data) => setVaccineArr(data));
    fetchLocations().then((data) => setLocationsArr(data));
  }, []);

  function handleClick(e: any) {
    e.preventDefault();

    // search for available trips matching preferences
    // we need to use suit_preferred, location_preferred, user_vaccine and transport_preferred which come from context

    setPreferredTrips(
      trips.filter((trip) => trip.location_name === locationPick)
    );

    console.log(preferredtrips);
  }

  let navigate = useNavigate();

  function showTrip() {
    console.log(`show filtered trips`);
    // navigate("/showTrip");
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
      <div>
        <h1>Thinking About Going To Mars</h1>
      </div>
      <div className="results">
        <Results />
      </div>

      {preferredtrips
        .filter((trip) => trip.company_name === "NASA")
        .map((trip, i) => (
          <SingleTrip key={i} trip={trip}></SingleTrip>
        ))}
    </div>
  );
}

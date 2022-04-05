import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { TripsBook } from "./Booktrip";
import { LocationPick } from "./Location";
import { SuitsPick } from "./SuitPick";
import { Transportation } from "./Transportation";
import { Vaccine } from "./Vaccine";
import { useNavigate } from "react-router-dom";

export function MarsTrip() {
  // const [showResults, setShowResults] = useState(false);
  // const onClick = () => {
  //   if (showResults) {
  //     setShowResults(false);
  //   } else {
  //     setShowResults(true);
  //   }
  // };

  function handleSubmit(e: any) {

  // search for available trips matching preferences
  // we need to use suit_preferred, location_preferred, user_vaccine and transport_preferred which come from context
    
  }

  let navigate = useNavigate();
  function showTrip() {
    navigate("/showTrip");
  }

  const Results = () => (
    <div className="resultsDropdown">
      <form onSubmit={handleSubmit}>
      <SuitsPick></SuitsPick>
      <LocationPick></LocationPick>
      {/* <TripsBook></TripsBook> */}
      <Transportation></Transportation>
      <Vaccine></Vaccine>
      <div className="trip">
        <button className="bookTrip" onClick={showTrip}>
          Book your trip
        </button>
        </div>
      </form>
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
    </div>
  );
}

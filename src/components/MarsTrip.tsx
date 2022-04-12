import { useContext, useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { TripsBook } from "./Booktrip";
import { LocationPick } from "./Location";
import { SuitsPick } from "./SuitPick";
import { Transportation } from "./Transportation";
import { Vaccine } from "./Vaccine";
import { useNavigate } from "react-router-dom";
import { Trip } from "../models/TripModel";
import { fetchSearch } from "../services/SpaceTravelApi";
import { SingleTrip } from "./Trip";
import { SpaceContext } from "../context/SpaceContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function MarsTrip() {
  const {
    loggedusers,
    addPreferredTrips,
    preferred_trips,
    location_choice,
    transport_choice,
    vaccine_choice,
    addVaccineChoice,
    suit_choice,
    logoutUser,
  } = useContext(SpaceContext);

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
    console.log("all picks", transport_choice, suit_choice, location_choice,vaccine_choice);
    fetchSearch(transport_choice, suit_choice, location_choice).then((data) =>
      addPreferredTrips(data)
    );

    console.log(preferred_trips);

    // search for available trips matching preferences
    // we need to use suit_preferred, location_preferred, user_vaccine and transport_preferred which come from context
    navigate("/showTrip");
  }

  useEffect(() => {
    if (loggedusers === false) {
      navigate("/login");
    }
  }, []);

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

  const sleep = (milliseconds: any) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async function timeSensitiveAction() {
    await sleep(3500);
    navigate("/login");
  }
  function handleLogout() {
    const saved = localStorage.getItem("userLogin");
    if (saved === "true") {
      logoutUser();
      localStorage.removeItem("userLogin");
    }
    timeSensitiveAction();
    logoutSuccess();
  }

  const logoutSuccess = () => {
    toast.success("You are successfully logged out", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const Results = () => (
    <div className="resultsDropdown">
      <SuitsPick
        onChange={(suitsPick) => setSuitHandler(suitsPick)}
      ></SuitsPick>
      <LocationPick
        onChange={(locationPick) => setLocationsHandler(locationPick)}
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
      <h1 className="goMars">Mars Travel, Inc.</h1>
      <div className="logHide">
        <div className="logout" onClick={handleLogout}>
          <FaSignOutAlt />
        </div>
        <div className="hide">Logout</div>
        <ToastContainer className="marstoast"></ToastContainer>
      </div>
      <div className="results">
        <Results />
      </div>
    </div>
  );
}

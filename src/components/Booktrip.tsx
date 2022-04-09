import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowDown, FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchTrips } from "../services/SpaceTravelApi";
import { Trip } from "../models/TripModel";
import { SingleTrip } from "./Trip";
import { SpaceContextProvider } from "../context/SpaceContextModel";
import { SpaceContext } from "../context/SpaceContext";

export function TripsBook() {
  const [departure, setDeparture] = useState(new Date());
  let [arrival, setArrival] = useState(new Date());

  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    fetchTrips().then((data) => setTrips(data));
  }, []);

  const { preferred_trips } = useContext(SpaceContext);

  const datesError = () =>
    toast.warn("please select arrival date after departure date!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toastBackground",
    });

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("departure date", departure);
    console.log("arrival date", arrival);
  }

  function verifyArrival(e: any) {
    if (e !== new Date() && e <= departure) {
      datesError();
    } else {
      setArrival(e);
    }
  }

  let navigate = useNavigate();
  function backToMarsTripPage() {
    navigate("/getTripDetails");
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

  return (
    <div className="booktripHeader">
      <div className="marsHeader">
        <h1 className="goMars">Mars Travel, Inc.</h1>
        <div className="logHide">
          <div className="logout" onClick={handleLogout}>
            <FaSignOutAlt />
          </div>
          <div className="hide">Logout</div>
        </div>
      </div>
      <div className="optionsDrop">
        <button className="leftArrow">
          <FaArrowLeft onClick={backToMarsTripPage}></FaArrowLeft>
        </button>
        <form onSubmit={handleSubmit}>
          <h3>
            <div className="departureHead">
              <i className="departureText"> Departure Date </i>
              <DatePicker
                className="departure"
                onChange={setDeparture}
                value={departure}
              />
            </div>
            <div className="arrivalHead">
              <i className="arrivalText"> Arrival Date </i>
              <DatePicker
                className="arrival"
                onChange={verifyArrival}
                value={arrival}
              />
            </div>
            <ToastContainer className="booktoast"></ToastContainer>
          </h3>
          {/* <FaArrowDown /> */}
          <div>
            {/* <button className="btn btn-success">Add Trip</button> */}
          </div>
        </form>
        {preferred_trips.map((trip, i) => (
          <SingleTrip key={i} trip={trip} />
        ))}
      </div>
    </div>
  );
}

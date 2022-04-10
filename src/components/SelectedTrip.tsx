import { Trip } from "../models/TripModel";
import moment from "moment";
import { FaRocket } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { fetchTrip } from "../services/SpaceTravelApi";
import { SpaceContext } from "../context/SpaceContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowDown, FaArrowLeft, FaSignOutAlt } from "react-icons/fa";

export function SelectedTrip() {
  const { selected_trip, logoutUser, loggedusers } = useContext(SpaceContext);

  const [mytrip, setMyTrip] = useState<Trip>();

  let navigate = useNavigate();

  useEffect(() => {
    if (loggedusers === false) {
      navigate("/login");
    }
    fetchTrip(selected_trip).then((data) => setMyTrip(data));
  }, []);

  const sleep = (milliseconds: any) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async function timeSensitiveAction() {
    await sleep(3500);
    navigate("/login");
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

  function handleLogout() {
    const saved = localStorage.getItem("userLogin");
    if (saved === "true") {
      logoutUser();
      localStorage.removeItem("userLogin");
    }
    timeSensitiveAction();
    logoutSuccess();
  }

  return (
    <IconContext.Provider value={{ style: { marginLeft: "10px" } }}>
      <div className="marsHeader">
        <h1 className="goMars">Mars Travel, Inc.</h1>
        <div className="logHide">
          <div className="logout" onClick={handleLogout}>
            <FaSignOutAlt />
          </div>
          <div className="hide">Logout</div>
        </div>
      </div>

      <div className="TripItem">
        <ul>
          <li>
            Departure Date:{" "}
            {moment(mytrip?.departure_date).format("MM/DD/YYYY")}
          </li>
          <li>
            Arrival Date: {moment(mytrip?.arrival_date).format("MM/DD/YYYY")}
          </li>
          <li>Trip time (Terrestrial Hours): {mytrip?.trip_time}</li>
          <li>Transportation Company: {mytrip?.company_name}</li>
          <li>Trip Price: {mytrip?.price}</li>
          <li>Destination: {mytrip?.location_name}</li>
          <li>
            Distance: {mytrip?.distance} {mytrip?.unit_of_measure}
          </li>
          <li>Space Suit Type: {mytrip?.space_suit_name}</li>
        </ul>

        <button className="liftOff">
          Lift-Off
          <FaRocket />
        </button>
        <ToastContainer />
      </div>
    </IconContext.Provider>
  );
}

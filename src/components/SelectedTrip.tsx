import { Trip } from "../models/TripModel";
import moment from "moment";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
import {
  bookTrip,
  fetchLocations,
  fetchTrip,
  fetchVaccines,
  userVaccineCompliant,
} from "../services/SpaceTravelApi";
import { SpaceContext } from "../context/SpaceContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSignOutAlt, FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import { IMAGE_BASE64 } from "../constants/ImageHelper";
import { VaccineFace } from "../models/VaccineModel";
import { LocationFace } from "../models/LocationModel";
import { Asteroids } from "./Asteroids";

export function SelectedTrip() {
  const {
    user_id,
    selected_trip,
    logoutUser,
    loggedusers,
    first_name,
    last_name,
    vaccine_choice,
  } = useContext(SpaceContext);

  const [mytrip, setMyTrip] = useState<Trip>();
  const [vaccinesarr, setVaccineArr] = useState<VaccineFace[]>([]);
  const [locationsarr, setLocationsArr] = useState<LocationFace[]>([]);
  const [vaccinecompliant, setVaccineCompliant] = useState<boolean>();
  const [vaccineText, setVaccineText] = useState<string>("");

  let navigate = useNavigate();

  useEffect(() => {
    if (loggedusers === false) {
      navigate("/login");
    }
    fetchVaccines().then((data) => setVaccineArr(data));
    fetchTrip(selected_trip).then((data) => setMyTrip(data));
    fetchLocations().then((data) => setLocationsArr(data));
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

  function handleClick(mytrip: any) {
    console.log("names", first_name, last_name);
    console.log(user_id, mytrip.id);
    bookTrip(user_id, mytrip.id);
    const mylocation = locationsarr.find(
      (l) => l.location_name === mytrip.location_name
    );
    const vaccineRequired = vaccinesarr.find(
      (v) => v.location_id === mylocation?.id
    );

    function vaxCompliant() {
      let vaxcompliant =
        vaccineRequired?.vaccine_name === vaccine_choice ? true : false;
      let vaccineInfo = "";
      if (vaxcompliant) {
        setVaccineCompliant(true);
        userVaccineCompliant(user_id);
        vaccineInfo = `Passenger is immunized against ${vaccineRequired?.vaccine_name}`;
      } else {
        setVaccineCompliant(false);
        vaccineInfo = `Passenger must get vaccine against ${vaccineRequired?.vaccine_name} before travel.`;
      }
      setVaccineText(vaccineInfo);
      return vaccineInfo;
    }
    let vaccineInfo2 = vaxCompliant();
    generatePDF(mytrip, vaccineInfo2);
  }
 
  function generatePDF(trip: Trip, vaccinInfo: string) {
    var doc = new jsPDF("l", "px", [250, 500]);
    var imgData = "data:image/jpeg;base64," + IMAGE_BASE64;
    doc.addImage(imgData, "jpeg", 0, 0, 510, 250);
    doc.setTextColor("black");
    doc.addFont("helvetica", "normal", "sans-serif", 700);
    doc.text("BOARDING PASS", 220, 20);
    doc.text(
      "Passenger Name :" +
        "" +
        first_name.toUpperCase() +
        " " +
        last_name.toUpperCase(),
      20,
      40
    );
    doc.text(
      "Departure Date :" +
        "" +
        moment(trip.departure_date).format("MM/DD/YYYY") +
        "",
      20,
      60
    );
    doc.text(
      "Arrival Date :" +
        "" +
        moment(trip.arrival_date).format("MM/DD/YYYY") +
        "",
      20,
      80
    );
    doc.text("Trip time (Terrestrial Hours) :" + "" + trip.trip_time, 20, 100);
    doc.text("Transportation Company :" + "" + trip.company_name, 20, 120);
    doc.text("Trip Price :" + "" + "$" + trip.price + "", 20, 140);
    doc.text("Destination :" + "" + trip.location_name + "", 20, 160);
    doc.text(
      "Distance :" + "" + trip.distance + " " + trip.unit_of_measure,
      20,
      180
    );
    doc.text("Space Suit Type :" + "" + trip.space_suit_name + "", 20, 200);
    if (vaccinInfo.length > 0) {
      doc.text("Vaccine Status: " + "" + vaccinInfo + "", 20, 220);
    }
    doc.save("boardingPass.pdf");
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
            Departure Date:
            {moment(mytrip?.departure_date).format("MM/DD/YYYY")}
          </li>
          <li>
            Arrival Date: {moment(mytrip?.arrival_date).format("MM/DD/YYYY")}
          </li>
          <li>Trip time (Terrestrial Hours): {mytrip?.trip_time}</li>
          <li>Transportation Company: {mytrip?.company_name}</li>
          <li>Trip Price: ${mytrip?.price}</li>
          <li>Destination: {mytrip?.location_name}</li>
          <li>
            Distance: {mytrip?.distance} {mytrip?.unit_of_measure}
          </li>
          <li>Space Suit Type: {mytrip?.space_suit_name}</li>
        </ul>

        <button className="download" onClick={() => handleClick(mytrip)}>
          Print boarding pass <FaPrint />
        </button>
        <ToastContainer />
      </div>
      <Suspense fallback={<h2>Loading Near Earth Objects...</h2>}>
        <Asteroids />
      </Suspense>
    </IconContext.Provider>
  );
}

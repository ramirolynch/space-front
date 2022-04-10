import { Trip } from "../models/TripModel";
import moment from "moment";
import { FaRocket } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SelectedTrip } from "./SelectedTrip";
import { useNavigate } from "react-router-dom";
import { SpaceContext } from "../context/SpaceContext";
import { useContext } from "react";
import { jsPDF } from "jspdf";
import { IMAGE_BASE64 } from "../constants/ImageHelper";

interface Props {
  trip: Trip;
}

export function SingleTrip({ trip }: Props) {
  const { addSelectedTrip } = useContext(SpaceContext);

  let navigate = useNavigate();

  function handleClick(trip: Trip) {
    addSelectedTrip(trip.id);
    generatePDF(trip);
    navigate(`/trips/${trip.id}`);
  }

  function generatePDF(trip: Trip) {
    var doc = new jsPDF("l", "px", [250, 500]);
    var imgData = "data:image/jpeg;base64," + IMAGE_BASE64;
    doc.addImage(imgData, "jpeg", 0, 0, 510, 250);
    doc.setTextColor("white");
    doc.addFont("helvetica", "normal", "sans-serif", 700);
    doc.text("BOARDING PASS", 220, 20);
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
    doc.text("Trip Price :" + "" + trip.price + "", 20, 140);
    doc.text("Destination :" + "" + trip.location_name + "", 20, 160);
    doc.text(
      "Distance :" + "" + trip.distance + " " + trip.unit_of_measure,
      20,
      180
    );
    doc.text("Space Suit Type :" + "" + trip.space_suit_name + "", 20, 200);
    doc.save("boardingPass.pdf");
  }

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

        <button className="liftOff" onClick={() => handleClick(trip)}>
          Lift-Off
          <FaRocket />
        </button>
      </div>
    </IconContext.Provider>
  );
}

import { Trip } from "../models/TripModel";
import moment from 'moment'

interface Props {
    trip: Trip;
}

export function SingleTrip({trip}:Props) {

    


    return (
        <div>
             <ul>
                <li>Departure Date: {moment(trip.departure_date).format('MM/DD/YYYY')}</li>
                <li>Arrival Date: {moment(trip.arrival_date).format('MM/DD/YYYY')}</li>
                <li>Trip time (Terrestrial Hours): {trip.trip_time}</li>
            </ul>
        </div>
    );

}
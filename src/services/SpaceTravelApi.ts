import axios from "axios";
import { NearEarthObject, NeoFace } from "../models/NsoModel";
const accessToken = process.env.REACT_APP_NASA_ACCESS_TOKEN || "";

export function signUp(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  return axios
    .post(`https://space-back.vercel.app/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function logIn(email: string, password: string) {
  return axios
    .post(`https://space-back.vercel.app/login`, {
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

// trip APIs

export function fetchTrips() {
  return axios
    .get(`https://space-back.vercel.app/trips`, {})
    .then((response) => response.data);
}

export function fetchSearch(
  company_name: string,
  suit_name: string,
  location_name: string
) {
  return axios
    .get(`https://space-back.vercel.app/trips/search`, {
      params: {
        company_name: company_name,
        suit_name: suit_name,
        location_name: location_name,
      },
    })
    .then((response) => response.data);
}

export function fetchPhoto() {
  return axios
    .get<any>(`https://api.nasa.gov/planetary/apod?api_key=${accessToken}`)
    .then((response) => response.data);
}

export function fetchAsteroids(start_date: string, end_date: string) {
  return axios
    .get<any>(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${accessToken}`
    )
    .then((response) => response.data);
}

// fetch trip by trip id
export function fetchTrip(id: number) {
  return axios
    .get(`https://space-back.vercel.app/trips/${id}`, {})
    .then((response) => response.data);
}

export function postTrip(
  departure_date: string,
  arrival_date: string,
  trip_time: number,
  location_id: number,
  transportation_id: number
) {
  return axios
    .post(`https://space-back.vercel.app/trips`, {
      departure_date: departure_date,
      arrival_date: arrival_date,
      trip_time: trip_time,
      location_id: location_id,
      transportation_id: transportation_id,
    })
    .then((response) => response.data);
}

export function deleteTrip(id: number) {
  return axios
    .delete(`https://space-back.vercel.app/trips/${id}`)
    .then((response) => response.data);
}

export function editTrip(
  id: number,
  departure_date: string,
  arrival_date: string,
  trip_time: number,
  location_id: number,
  transportation_id: number
) {
  return axios
    .put(`https://space-back.vercel.app/trips/${id}`, {
      departure_date: departure_date,
      arrival_date: arrival_date,
      trip_time: trip_time,
      location_id: location_id,
      transportation_id: transportation_id,
    })
    .then((response) => response.data);
}

// locations routes

export function fetchLocations() {
  return axios
    .get(`https://space-back.vercel.app/locations`, {})
    .then((response) => response.data);
}

export function fetchLocation(id: number) {
  return axios
    .get(`https://space-back.vercel.app/locations/${id}`, {})
    .then((response) => response.data);
}

export function postLocation(
  location_name: string,
  distance: number,
  unit_of_measure: string
) {
  return axios
    .post(`https://space-back.vercel.app/locations`, {
      location_name: location_name,
      distance: distance,
      unit_of_measure: unit_of_measure,
    })
    .then((response) => response.data);
}

export function editLocation(
  id: number,
  location_name: string,
  distance: number,
  unit_of_measure: string
) {
  return axios
    .put(`https://space-back.vercel.app/locations/${id}`, {
      location_name: location_name,
      distance: distance,
      unit_of_measure: unit_of_measure,
    })
    .then((response) => response.data);
}

export function deleteLocation(id: number) {
  return axios
    .delete(`https://space-back.vercel.app/locations/${id}`)
    .then((response) => response.data);
}

export function fetchTransportation() {
  return axios
    .get(`https://space-back.vercel.app/transportation`, {})
    .then((response) => response.data);
}

export function fetchTransport(id: number) {
  return axios
    .get(`https://space-back.vercel.app/transportation/${id}`, {})
    .then((response) => response.data);
}

export function postTransport(company_name: string, price: number) {
  return axios
    .post(`https://space-back.vercel.app/transportation`, {
      company_name: company_name,
      price: price,
    })
    .then((response) => response.data);
}

export function editTransport(id: number, company_name: string, price: number) {
  return axios
    .put(`https://space-back.vercel.app/transportation/${id}`, {
      company_name: company_name,
      price: price,
    })
    .then((response) => response.data);
}

export function deleteTransport(id: number) {
  return axios
    .delete(`https://space-back.vercel.app/transportation/${id}`)
    .then((response) => response.data);
}

export function fetchVaccines() {
  return axios
    .get(`https://space-back.vercel.app/vaccines`, {})
    .then((response) => response.data);
}

export function fetchVaccine(id: number) {
  return axios
    .get(`https://space-back.vercel.app/vaccines/${id}`, {})
    .then((response) => response.data);
}

export function postVaccine(vaccine_name: string, location_id: number) {
  return axios
    .post(`https://space-back.vercel.app/vaccines`, {
      vaccine_name: vaccine_name,
      location_id: location_id,
    })
    .then((response) => response.data);
}

export function editVaccine(
  id: number,
  vaccine_name: string,
  location_id: number
) {
  return axios
    .put(`https://space-back.vercel.app/vaccines/${id}`, {
      vaccine_name: vaccine_name,
      location_id: location_id,
    })
    .then((response) => response.data);
}

export function deleteVaccine(id: number) {
  return axios
    .delete(`https://space-back.vercel.app/vaccines/${id}`)
    .then((response) => response.data);
}

export function fetchSuits() {
  return axios
    .get(`https://space-back.vercel.app/suits`, {})
    .then((response) => response.data);
}

export function fetchSuit(id: number) {
  return axios
    .get(`https://space-back.vercel.app/suits/${id}`, {})
    .then((response) => response.data);
}

export function fetchUser(id: number) {
  return axios
    .get(`https://space-back.vercel.app/users/${id}`, {})
    .then((response) => response.data);
}

export function postSuit(
  suit_name: string,
  suit_color: string,
  temp_min: number,
  temp_max: number,
  suit_size: string,
  location_id: number
) {
  return axios
    .post(`https://space-back.vercel.app/suits`, {
      suit_name: suit_name,
      suit_color: suit_color,
      temp_min: temp_min,
      temp_max: temp_max,
      suit_size: suit_size,
      location_id: location_id,
    })
    .then((response) => response.data);
}

export function editSuit(
  id: number,
  suit_name: string,
  suit_color: string,
  temp_min: number,
  temp_max: number,
  suit_size: string,
  location_id: number
) {
  return axios
    .put(`https://space-back.vercel.app/suits/${id}`, {
      suit_name: suit_name,
      suit_color: suit_color,
      temp_min: temp_min,
      temp_max: temp_max,
      suit_size: suit_size,
      location_id: location_id,
    })
    .then((response) => response.data);
}

export function deleteSuit(id: number) {
  return axios
    .delete(`https://space-back.vercel.app/suits/${id}`)
    .then((response) => response.data);
}

export function bookTrip(id: number, trip_id: number) {
  return axios
    .put(`https://space-back.vercel.app/userbooked/${id}`, {
      trip_booked: trip_id,
    })
    .then((response) => response.data);
}

export function userVaccineCompliant(id: number) {
  return axios
    .put(`https://space-back.vercel.app/uservaccine/${id}`)
    .then((response) => response.data);
}

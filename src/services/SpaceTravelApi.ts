import axios from "axios";

export function signUp(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  return axios
    .post(`http://localhost:3000/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function logIn(email: string, password: string) {
  return axios
    .post(`http://localhost:3000/login`, {
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

// trip APIs

export function fetchTrips() {
  return axios
    .get(`http://localhost:3000/trips`, {})
    .then((response) => response.data);
}

export function fetchSearch(
  company_name: string,
  suit_name: string,
  location_name: string
) {
  return axios
    .get(
      `http://localhost:3000/trips/${company_name}/${suit_name}/${location_name}`,
      {}
    )
    .then((response) => response.data);
}

// fetch trip by trip id
export function fetchTrip(id: number) {
  return axios
    .get(`http://localhost:3000/trips/${id}`, {})
    .then((response) => response.data);
}

fetch;

export function postTrip(
  departure_date: string,
  arrival_date: string,
  trip_time: number,
  location_id: number,
  transportation_id: number
) {
  return axios
    .post(`http://localhost:3000/trips`, {
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
    .delete(`http://localhost:3000/trips/${id}`)
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
    .put(`http://localhost:3000/trips/${id}`, {
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
    .get(`http://localhost:3000/locations`, {})
    .then((response) => response.data);
}

export function fetchLocation(id: number) {
  return axios
    .get(`http://localhost:3000/locations/${id}`, {})
    .then((response) => response.data);
}

export function postLocation(
  location_name: string,
  distance: number,
  unit_of_measure: string
) {
  return axios
    .post(`http://localhost:3000/locations`, {
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
    .put(`http://localhost:3000/locations/${id}`, {
      location_name: location_name,
      distance: distance,
      unit_of_measure: unit_of_measure,
    })
    .then((response) => response.data);
}

export function deleteLocation(id: number) {
  return axios
    .delete(`http://localhost:3000/locations/${id}`)
    .then((response) => response.data);
}

export function fetchTransportation() {
  return axios
    .get(`http://localhost:3000/transportation`, {})
    .then((response) => response.data);
}

export function fetchTransport(id: number) {
  return axios
    .get(`http://localhost:3000/transportation/${id}`, {})
    .then((response) => response.data);
}

export function postTransport(company_name: string, price: number) {
  return axios
    .post(`http://localhost:3000/transportation`, {
      company_name: company_name,
      price: price,
    })
    .then((response) => response.data);
}

export function editTransport(id: number, company_name: string, price: number) {
  return axios
    .put(`http://localhost:3000/transportation/${id}`, {
      company_name: company_name,
      price: price,
    })
    .then((response) => response.data);
}

export function deleteTransport(id: number) {
  return axios
    .delete(`http://localhost:3000/transportation/${id}`)
    .then((response) => response.data);
}

export function fetchVaccines() {
  return axios
    .get(`http://localhost:3000/vaccines`, {})
    .then((response) => response.data);
}

export function fetchVaccine(id: number) {
  return axios
    .get(`http://localhost:3000/vaccines/${id}`, {})
    .then((response) => response.data);
}

export function postVaccine(vaccine_name: string, location_id: number) {
  return axios
    .post(`http://localhost:3000/vaccines`, {
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
    .put(`http://localhost:3000/vaccines/${id}`, {
      vaccine_name: vaccine_name,
      location_id: location_id,
    })
    .then((response) => response.data);
}

export function deleteVaccine(id: number) {
  return axios
    .delete(`http://localhost:3000/vaccines/${id}`)
    .then((response) => response.data);
}

export function fetchSuits() {
  return axios
    .get(`http://localhost:3000/suits`, {})
    .then((response) => response.data);
}

export function fetchSuit(id: number) {
  return axios
    .get(`http://localhost:3000/suits/${id}`, {})
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
    .post(`http://localhost:3000/suits`, {
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
    .put(`http://localhost:3000/suits/${id}`, {
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
    .delete(`http://localhost:3000/suits/${id}`)
    .then((response) => response.data);
}

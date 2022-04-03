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

export function fetchTrips() {
  return axios
    .get(`http://localhost:3000/trips`, {})
    .then((response) => response.data);
}

// fetch trip by trip id
export function fetchTrip(id: string) {
  return axios
    .get(`http://localhost:3000/trips/${id}`, {})
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

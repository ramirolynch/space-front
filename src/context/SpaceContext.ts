import { User } from "../models/UserModel";
import { createContext } from "react";
import { Trip } from "../models/TripModel";
import { SuitFace } from "../models/SuitModel";

export interface SpaceContextModel {
  users: User[];
  trips: Trip[];
  first_name: string;
  last_name: string;
  selected_trip: number;
  user_id: number;
  preferred_trips: Trip[];
  location_choice: string;
  suit_choice: string;
  transport_choice: string;
  vaccine_choice: string;
  loggedusers: boolean;
  addUser: (user: User) => void;
  addFirstName: (first_name: string) => void;
  addLastName: (last_name: string) => void;
  addUserId: (userid: number) => void;
  addTrip: (trip: Trip) => void;
  addSelectedTrip: (id: number) => void;
  addPreferredTrips: (trips: Trip[]) => void;
  addLocationChoice: (location: string) => void;
  addSuitChoice: (suit: string) => void;
  addTransportChoice: (transport: string) => void;
  addVaccineChoice: (vaccine: string) => void;
  loginUser: () => void;
  logoutUser: () => void;
}

const defaultValue: SpaceContextModel = {
  users: [],
  trips: [],
  first_name: "",
  last_name: "",
  selected_trip: 0,
  user_id: 0,
  preferred_trips: [],
  location_choice: "",
  transport_choice: "",
  suit_choice: "",
  vaccine_choice: "",
  loggedusers: false,
  addUser: () => {},
  addFirstName: () => {},
  addLastName: () => {},
  addUserId: () => {},
  addTrip: () => {},
  addSelectedTrip: () => {},
  addPreferredTrips: () => {},
  addLocationChoice: () => {},
  addSuitChoice: () => {},
  addTransportChoice: () => {},
  addVaccineChoice: () => {},
  loginUser: () => {},
  logoutUser: () => {},
};

export const SpaceContext = createContext<SpaceContextModel>(defaultValue);

import { User } from "../models/UserModel";
import { createContext } from "react";
import { Trip } from "../models/TripModel";
import { SuitFace } from "../models/SuitModel";

export interface SpaceContextModel {
  users: User[];
  trips: Trip[];
  selected_trip: number | null;
  preferred_trips: Trip[];
  location_choice: string;
  suit_choice: string;
  transport_choice: string;
  vaccine_choice: string;
  loggedusers: boolean;
  addUser: (user: User) => void;
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
  selected_trip: null,
  preferred_trips: [],
  location_choice: "",
  transport_choice: "",
  suit_choice: "",
  vaccine_choice: "",
  loggedusers: false,
  addUser: () => {},
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

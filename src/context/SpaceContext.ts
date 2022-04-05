import { User } from "../models/UserModel";
import { createContext } from "react";
import { Trip } from "../models/TripModel";
import { SuitFace } from "../models/SuitModel";

export interface SpaceContextModel {
  users: User[];
  trips: Trip[];
  suit_preferred: string;
  location_preferred: string;
  user_vaccine: string;
  transport_preferred: string;
  loggedusers: boolean;
  addUser: (user: User) => void;
  addTrip: (trip: Trip) => void;
  addSuit: (suit: string) => void;
  addLocation: (location: string) => void;
  addUserVaccine: (uservaccine: string) => void;
  addUserTransport: (usertransport: string) => void;

  loginUser: () => void;
  logoutUser: () => void;
}

const defaultValue: SpaceContextModel = {
  users: [],
  trips: [],
  suit_preferred: "No Suit Selected",
  location_preferred: "No Location Selected",
  user_vaccine: "No Vaccine Selected",
  transport_preferred: "No Transport Company Selected",
  loggedusers: false,
  addUser: () => {},
  addTrip: () => {},
  addSuit: () => {},
  addLocation: () => {},
  addUserVaccine: () => {},
  addUserTransport: () => {},
  loginUser: () => {},
  logoutUser: () => {},
};

export const SpaceContext = createContext<SpaceContextModel>(defaultValue);

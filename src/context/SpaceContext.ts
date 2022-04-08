import { User } from "../models/UserModel";
import { createContext } from "react";
import { Trip } from "../models/TripModel";
import { SuitFace } from "../models/SuitModel";

export interface SpaceContextModel {
  users: User[];
  trips: Trip[];
  preferred_trips: Trip[];
  loggedusers: boolean;
  addUser: (user: User) => void;
  addTrip: (trip: Trip) => void;
  addPreferredTrips: (trips: Trip[]) => void;
  loginUser: () => void;
  logoutUser: () => void;
}

const defaultValue: SpaceContextModel = {
  users: [],
  trips: [],
  preferred_trips: [],
  loggedusers: false,
  addUser: () => {},
  addTrip: () => {},
  addPreferredTrips: () => {},
  loginUser: () => {},
  logoutUser: () => {},
};

export const SpaceContext = createContext<SpaceContextModel>(defaultValue);

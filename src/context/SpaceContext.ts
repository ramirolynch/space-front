import { User } from "../models/UserModel";
import { createContext } from "react";
import { Trip } from "../models/TripModel";

export interface SpaceContextModel {
  users: User[];
  trips: Trip[];
  loggedusers: boolean;
  addUser: (user: User) => void;
  addTrip: (trip: Trip) => void;
  loginUser: () => void;
  logoutUser: () => void;
}

const defaultValue: SpaceContextModel = {
  users: [],
  trips: [],
  loggedusers: false,
  addUser: () => {},
  addTrip: () => {},
  loginUser: () => {},
  logoutUser: () => {},
};

export const SpaceContext = createContext<SpaceContextModel>(defaultValue);

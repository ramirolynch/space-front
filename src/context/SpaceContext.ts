import { User } from "../models/UserModel";
import { createContext } from "react";
import { Trip } from "../models/TripModel";
import { SuitFace } from "../models/SuitModel";

export interface SpaceContextModel {
  users: User[];
  trips: Trip[];
  suit_preferred: string;
  loggedusers: boolean;
  addUser: (user: User) => void;
  addTrip: (trip: Trip) => void;
  addSuit: (suit: string) => void;
  loginUser: () => void;
  logoutUser: () => void;
}

const defaultValue: SpaceContextModel = {
  users: [],
  trips: [],
  suit_preferred: "No Suit Selected",
  loggedusers: false,
  addUser: () => {},
  addTrip: () => {},
  addSuit: () => {},
  loginUser: () => {},
  logoutUser: () => {},
};

export const SpaceContext = createContext<SpaceContextModel>(defaultValue);

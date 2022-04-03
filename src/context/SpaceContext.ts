import { User } from "../models/UserModel";
import { createContext } from "react";

export interface SpaceContextModel {
  users: User[];
  loggedusers: boolean;
  addUser: (user: User) => void;
  loginUser: () => void;
}

const defaultValue: SpaceContextModel = {
  users: [],
  loggedusers: false,
  addUser: () => {},
  loginUser: () => {},
};

export const SpaceContext = createContext<SpaceContextModel>(defaultValue);

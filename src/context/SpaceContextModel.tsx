import { ReactNode, useEffect, useState } from "react";
import { SuitFace } from "../models/SuitModel";
import { Trip } from "../models/TripModel";
import { User } from "../models/UserModel";
import { SpaceContext } from "./SpaceContext";

interface Props {
  children: ReactNode;
}

export function SpaceContextProvider({ children }: Props) {
  //localStorage implementation

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem("userStorage") || "[]";
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [trips, setTrips] = useState<Trip[]>(() => {
    const saved = localStorage.getItem("tripsStorage") || "[]";
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [loggedusers, setLoggedUser] = useState<boolean>(() => {
    const saved = localStorage.getItem("userLogin");
    const initialValue = saved === "true" ? true : false;
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem("userStorage", JSON.stringify(users));
    localStorage.setItem("userLogin", JSON.stringify(loggedusers));
  }, [users, loggedusers]);

  function addUser(user: User) {
    setUsers([...users, user]);
  }
  function addTrip(trip: Trip) {
    setTrips([...trips, trip]);
  }

  function loginUser() {
    setLoggedUser(true);
  }

  function logoutUser() {
    setLoggedUser(false);
  }
  const [preferred_trips, setPreferredTrips] = useState<Trip[]>([]); 

  function addPreferredTrips(trips: Trip[]) {
    setPreferredTrips(trips);
  }
  

  return (
    <SpaceContext.Provider
      value={{
        users,
        addUser,
        loggedusers,
        loginUser,
        logoutUser,
        addTrip,
        trips, 
        preferred_trips,
      addPreferredTrips
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
}

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

  const [suit_preferred, setSuitPreferred] = useState<any>()

  function addSuit(suit:string) {
    setSuitPreferred(suit);
  }

  const [location_preferred, setLocationPreferred] = useState<any>()

  function addLocation(location:string) {
    setLocationPreferred(location);
  }

  const [user_vaccine, setUserVaccine] = useState<any>()

  function addUserVaccine(uservaccine:string) {
    setUserVaccine(uservaccine);
  }

  const [transport_preferred, setUserTransport] = useState<any>()

  function addUserTransport(usertransport:string) {
    setUserTransport(usertransport);
  }


  return (
    <SpaceContext.Provider value={{ users, addUser, loggedusers, loginUser, logoutUser, addTrip, trips, addSuit, suit_preferred, addLocation,location_preferred, user_vaccine, addUserVaccine, transport_preferred,addUserTransport  }}>
      {children}
    </SpaceContext.Provider>
  );
}

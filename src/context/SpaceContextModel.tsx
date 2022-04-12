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

  const [location_choice, setLocationChoice] = useState<string>("");

  function addLocationChoice(location: string) {
    setLocationChoice(location);
  }
  const [transport_choice, setTransportChoice] = useState<string>("");

  function addTransportChoice(transport: string) {
    setTransportChoice(transport);
  }
  const [vaccine_choice, setVaccineChoice] = useState<string>("");

  function addVaccineChoice(vaccine: string) {
    setVaccineChoice(vaccine);
  }

  const [suit_choice, setSuitChoice] = useState<string>("");

  function addSuitChoice(suit: string) {
    setSuitChoice(suit);
  }

  const [selected_trip, setSelectedTrip] = useState<number>(0);

  function addSelectedTrip(id: number) {
    setSelectedTrip(id);
  }

  const [first_name, setFirstName] = useState<string>('');

  function addFirstName(first_name: string) {
    setFirstName(first_name);
  }

  const [last_name, setLastName] = useState<string>('');

  function addLastName(last_name: string) {
    setLastName(last_name);
  }

  const [user_id, setUserId] = useState<number>(0);

  function addUserId(userid: number) {
    setUserId(userid);
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
        addPreferredTrips,
        location_choice,
        transport_choice,
        vaccine_choice,
        suit_choice,
        addLocationChoice,
        addTransportChoice,
        addVaccineChoice,
        addSuitChoice,
        selected_trip,
        addSelectedTrip,
        last_name,
        first_name,
        addFirstName,
        addLastName,
        user_id,
        addUserId
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
}

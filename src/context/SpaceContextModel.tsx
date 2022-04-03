import { ReactNode, useEffect, useState } from "react";
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

  const [loggedusers, setLoggedUser] = useState<boolean>(() => {
    const saved = localStorage.getItem("userLogin") || "";
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  useEffect(() => {
    localStorage.setItem("userStorage", JSON.stringify(users));
    localStorage.setItem("userLogin", JSON.stringify(loggedusers));
  }, [users, loggedusers]);

  function addUser(user: User) {
    setUsers([...users, user]);
  }

  function loginUser() {
    setLoggedUser(true);
  }

  return (
    <SpaceContext.Provider value={{ users, addUser, loggedusers, loginUser }}>
      {children}
    </SpaceContext.Provider>
  );
}

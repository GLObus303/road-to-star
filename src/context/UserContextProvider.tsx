// context/UserContextProvider.tsx

import React, { ReactNode, useState } from "react";

import { UserContext } from "./userContext";
import { User } from "../model/UserType";

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

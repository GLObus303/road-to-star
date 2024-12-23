import { createContext } from "react";

import { UserContextType } from "../model/UserContextType";

export const UserContext = createContext<UserContextType>(
  null as any as UserContextType
);

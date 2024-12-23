import { User } from "./UserType";

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

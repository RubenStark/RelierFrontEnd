import { useContext } from "react";
import { AuthContext } from "../utils/context";

export function useAuth() {
    const { user } = useContext(AuthContext);
    return user;
  }
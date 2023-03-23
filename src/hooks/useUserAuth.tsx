import userAuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

export function useUserAuth() {
    return useContext(userAuthContext);
  }
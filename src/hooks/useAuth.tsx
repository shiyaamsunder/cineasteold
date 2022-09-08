import { useContext } from "react";

import { AuthContext } from "@utils";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw Error("UseAuth must be used inside of AuthContext");
  }
  return context;
};

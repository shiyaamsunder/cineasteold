import { AuthContext } from "@utils";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context);
  if (context === undefined) {
    throw Error("UseAuth must be used inside of AuthContext");
  }
  return context;
};

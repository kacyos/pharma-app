import { useContext } from "react";
import { ContextApi } from "../context/contextApiUsers";

export function usePeople() {
  return useContext(ContextApi);
}

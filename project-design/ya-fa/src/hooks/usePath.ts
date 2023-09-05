import { useLocation } from "react-router-dom";
import { TCategory } from "../constants/layout";

export const usePath = () => {
  const path = useLocation().pathname.split("/")[1] as TCategory;

  return path;
};

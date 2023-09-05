import { useSearchParams } from "react-router-dom";

export const useItem = () => {
  const [id] = useSearchParams();

  return id.get("item");
};

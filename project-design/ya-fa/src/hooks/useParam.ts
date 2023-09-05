import { useSearchParams } from "react-router-dom";

export const useParam = (param: string) => {
  const [id] = useSearchParams();

  return id.get(param);
};

import { useSearchParams } from "react-router-dom";

const useSearchHandlerParams = () => {
  const [params, setParams] = useSearchParams();

  const getParam = (key: string) => params.get(key);

  const setParam = (newParams: object) => {
    setParams((prev) => ({
      ...Object.fromEntries(prev.entries()), 
      page: "1", 
      limit: prev.get("limit") || "4", 
      ...newParams,
    }));
  };

  return { getParam, setParam };
};

export default useSearchHandlerParams;

import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useGetQueryParams = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

export const useSetQueryParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const setQueryParams = (newParams) => {
    const currentParams = new URLSearchParams(location.search);

    // Update the currentParams with newParams
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] !== undefined) {
        currentParams.set(key, newParams[key]);
      } else {
        currentParams.delete(key);
      }
    });

    // Navigate to the new URL with updated query parameters
    navigate(`${location.pathname}?${currentParams.toString()}`, {
      replace: true,
    });
  };

  return { setQueryParams };
};

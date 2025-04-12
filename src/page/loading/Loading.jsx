import React from "react";
import { useCountriesStore } from "../../store/countriesStore";
import "./loading.css";

const Loading = () => {
  const isLoading = useCountriesStore((state) => state.isLoading);

  if (!isLoading) return null;
  return (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;

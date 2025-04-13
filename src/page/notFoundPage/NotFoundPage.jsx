import React from "react";
import "./notFoundPage.css";
import { useCountriesStore } from "../../store/countriesStore";
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
    const navigate = useNavigate()
  const fetchError = useCountriesStore((state) => state.fetchError);
  return (
    <div className="app-container">
      <div className="not-found">
        <TbError404 className="not-found-icon" />
        <p>{fetchError || "Page Not Found"}</p>
        <button onClick={()=>navigate("/")}> Go to home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;

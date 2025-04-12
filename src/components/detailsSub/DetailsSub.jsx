import React from "react";
import { useCountriesStore } from "../../store/countriesStore";
import "./detailsSub.css";

const DetailsSub = () => {
  const countryDetails = useCountriesStore((state) => state.countryDetails);
  return (
    <div className="details-sub-wrapper">
      <h1>{countryDetails.name.common}</h1>
      <div className="details-sub-container">
       <div className="section-one"> <p>
          <b>Native Names: </b>
          {Object.entries(countryDetails.name.nativeName)
            .map(([key, nameObj]) => nameObj.common)
            .join(", ")}
        </p>
        <p>
          <b>Population: </b> {countryDetails.population.toLocaleString()}
        </p>
        <p>
          <b>Region: </b> {countryDetails.region}
        </p>
        <p>
          <b>Sub Region: </b> {countryDetails.subregion}
        </p>
        <p>
          <b>Capital: </b> {countryDetails.capital}
        </p></div>
        <div className="section-two"><p>
          <b>Top Lavel Domain: </b> {countryDetails.tld.join(", ")}
        </p>
        <p>
          <b>Currencies: </b>
          {Object.entries(countryDetails.currencies)
            .map(([key, objName]) => objName.name)
            .join(", ")}
        </p>
        <p>
          <b>Languages: </b>{" "}
          {Object.values(countryDetails.languages).join(", ")}{" "}
        </p></div>
      </div>
    </div>
  );
};

export default DetailsSub;

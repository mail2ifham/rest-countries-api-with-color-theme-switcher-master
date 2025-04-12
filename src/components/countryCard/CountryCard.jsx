import React from "react";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  return (
    <ul className="card-werpper">
        <li key={country.cca2} className="card-container" >
          <img
            className="card-image"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          <div className="card-detail-container">
            <h3 className="card-header">{country.name.common}</h3>
            <p className="card-details">
              <b>Population:</b>
              {` ${country.population.toLocaleString()}`}
            </p>
            <p className="card-details">
              <b>Region:</b>
              {` ${country.region}`}
            </p>
            <p className="card-details">
              <b>Capital:</b>
              {` ${country.capital}`}
            </p>
          </div>
        </li>
    </ul>
  );
};

export default CountryCard;

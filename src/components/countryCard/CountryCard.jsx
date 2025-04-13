import React from "react";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  const sa = "skjhdgkd";
  return (
    <ul className="card-werpper">
      <li key={country.cca2} className="card-container">
        {country.flags && country.flags.alt ? (
          <img
            className="card-image"
            alt={country.flags.alt}
            src={country.flags.png}
          />
        ) : (
          <img
          className="card-image"
          alt={"flag of " + country.name.common}
          src={country.flags.png}
        />
        )}
        <div className="card-detail-container">
          <h1 className="card-header">{country.name.common}</h1>
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

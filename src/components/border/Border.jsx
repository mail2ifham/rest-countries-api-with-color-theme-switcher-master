import React, { useEffect } from "react";
import { useCountriesStore } from "../../store/countriesStore";
import "./border.css";
import { useNavigate } from "react-router";

const Border = () => {
  const navigate = useNavigate();
  const countryDetails = useCountriesStore((state) => state.countryDetails);
  const allCountries = useCountriesStore((state) => state.countries);
  const fetchCountries = useCountriesStore((state) => state.fetchCountries);

  const borderCountries = countryDetails.borders;
  useEffect(() => {
    fetchCountries();
  }, [countryDetails]);

  const getBorderNames =
    borderCountries &&
    borderCountries.map((border) => {
      return allCountries.find((country) => country.cca3 === border);
    });

  const handleBorderNav = (country) => {
      navigate(`/${country}`);
  };
  return (
    <div className="border-container">
      <b> Border Country:</b>
      {getBorderNames
        ? getBorderNames.length > 0 &&
          getBorderNames.map((country,index) =>
            country ? (
              <button key={index}
                className="border-button"
                onClick={() => handleBorderNav(country.cca3)}
              >
                {country.name.common}
              </button>
            ) : null
          )
        : " N/A"}
    </div>
  );
};

export default Border;

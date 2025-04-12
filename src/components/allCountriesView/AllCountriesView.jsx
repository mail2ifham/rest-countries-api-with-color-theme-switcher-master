import React, { useEffect } from "react";
import { useCountriesStore } from "../../store/countriesStore";
import CountryCard from "../countryCard/CountryCard";
import "./allCountriesView.css";
import { Link } from "react-router";
import Loading from "../../page/loading/Loading";

const AllCountriesView = () => {
  const { countries, filteredRegion, fetchCountries, search, getFilterdList,fetchError } =
    useCountriesStore();

  const filteredCounteries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (filteredRegion === "all" ||
        filteredRegion === country.region.toLowerCase())
    );
  });

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  useEffect(() => {
    getFilterdList(filteredCounteries);
  }, [search]);

  if (!filteredCounteries.length > 0) {
    return (
      <div>
        {fetchError ? <h2 className="error-message">{fetchError}</h2> :<Loading />}
      </div>
    );
  }

  return (
    <div className="country-view">
      {filteredCounteries.map((country) => (
        <Link to={`/${country.cca3}`} key={country.cca2}>
          <CountryCard country={country} />
        </Link>
      ))}
    </div>
  );
};

export default AllCountriesView;

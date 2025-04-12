import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import FilterDropDown from "../../components/filterDropDown/FilterDropDown";
import "./home.css";
import AllCountriesView from "../../components/allCountriesView/AllCountriesView";

const Home = () => {
  return (
    <div className="app-container home-font">
      <div className="home-actions">
        <SearchBar />
        <FilterDropDown />
      </div>
        <AllCountriesView/>
    </div>
  );
};

export default Home;


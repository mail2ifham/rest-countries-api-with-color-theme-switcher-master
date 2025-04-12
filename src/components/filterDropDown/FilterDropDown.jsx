import React, { useEffect, useRef, useState } from "react";
import "./filterDropDown.css";
import { RxCaretUp } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";
import { useCountriesStore } from "../../store/countriesStore";

const FilterDropDown = () => {
  const regions = ["all","africa", "americas", "asia", "europe", "oceania","antarctic"];
  const [isOpen, setIsOpen] = useState(false);
  const [buttonName, setButtonName] = useState("Filter by Region");
  const dropDownRef = useRef();

  const getFilterRegion = useCountriesStore((state) => state.getFilterRegion);

  const handleClick = (region) => {
    getFilterRegion(region);
    setIsOpen(false);
    setButtonName(region)
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handler);
    return () => {
      document.body.removeEventListener("click", handler);
    };
  }, [dropDownRef]);

  return (
    <div className="filter-drop-down" ref={dropDownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{buttonName === "all" ? "Filter by Region" : buttonName}</span>
        <span className="drop-down-icon" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} >
          {isOpen ? <RxCaretDown /> : <RxCaretUp />}
        </span>
      </button>

      {isOpen && (
        <ul className="drop-menu-content">
          {regions.map((region, index) => (
            <li
              key={index}
              className="drop-down-item"
              onClick={() => handleClick(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropDown;

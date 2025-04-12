import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useCountriesStore } from "../../store/countriesStore";
import { RxArrowLeft } from "react-icons/rx";
import "./details.css";
import DetailsSub from "../../components/detailsSub/DetailsSub";
import Border from "../../components/border/Border";
import Loading from "../loading/Loading";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { countryCode } = useParams();
  const fetchCountryDetails = useCountriesStore(
    (state) => state.fetchCountryDetails
  );
  const countryDetails = useCountriesStore((state) => state.countryDetails);
  const isLoading = useCountriesStore((state) => state.isLoading);
  const setIsLoading = useCountriesStore((state) => state.setIsLoading);

  useEffect(() => {
    fetchCountryDetails(countryCode);
  }, [fetchCountryDetails, countryCode]);

  if (!countryDetails || !countryDetails.name) {
    return (
      <div>
        {" "}
        <Loading />
      </div>
    );
  }

  return (
    <div className="app-container details-font">
      <div className="back-button-container">

        <button className="back-button" onClick={() => navigate("/")}>
          <RxArrowLeft /> <span>Back</span>
        </button>
      </div>
      <div className="details-container">
        <div className="flag">
          <img src={countryDetails.flags.svg} alt={countryDetails.flags.alt} />
        </div>
        <div className="details-sub">
          <DetailsSub />
          <Border />
        </div>
      </div>
    </div>
  );
};

export default Details;

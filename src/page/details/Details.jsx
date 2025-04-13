import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCountriesStore } from "../../store/countriesStore";
import { RxArrowLeft } from "react-icons/rx";
import "./details.css";
import DetailsSub from "../../components/detailsSub/DetailsSub";
import Border from "../../components/border/Border";
import Loading from "../loading/Loading";
import NotFoundPage from "../notFoundPage/NotFoundPage";

const Details = () => {
  const navigate = useNavigate();
  const { countryCode } = useParams();
  const fetchCountryDetails = useCountriesStore(
    (state) => state.fetchCountryDetails
  );
  const countryDetails = useCountriesStore((state) => state.countryDetails);
  const fetchError = useCountriesStore((state) => state.fetchError);

  useEffect(() => {
    fetchCountryDetails(countryCode);
  }, [fetchCountryDetails, countryCode]);

  if (!countryDetails || !countryDetails.name) {
    return (
      <div>
       {fetchError ? <NotFoundPage/> : <Loading />}
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

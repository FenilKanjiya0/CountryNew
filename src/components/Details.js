import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCountry } from "../store/countrySlice";

const Details = () => {
  const dispach = useDispatch();
  const { country, loading, error } = useSelector(
    (state) => state.country
  ); // get all countries

  const handleClose = () => {
    dispach(showCountry());
  };
  return (
    <>
      {!error ? (
        loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div className="row">
            <div className="col-5">
              <img
                alt="img"
                src={country[0]?.flags?.png}
                style={{ width: "200px", height: "100px" }}
              />
            </div>
            <div className="col-7 text-start">
              <h6>
                Name : {country[0]?.name?.common}
                <span style={{ color: "#625d5d" }}>
                  ({country[0]?.name?.official})
                </span>
              </h6>
              <h6>Capital : {country[0]?.capital}</h6>
              <h6>Region: {country[0]?.region}</h6>
              <h6>Population : {country[0]?.population}</h6>
              <h6>TimeZone : {country[0]?.timezones}</h6>
              <button
                className="btn btn-secondary mt-4"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        )
      ) : null}
    </>
  );
};

export default Details;

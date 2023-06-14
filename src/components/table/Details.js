import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCountry } from "../../store/countrySlice";

const Details = () => {
  const details = useSelector((state) => state.country);
  const dispach = useDispatch();

  return (
    <>
      {details?.map((val, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-5">
              <img
                src={val.flags.png}
                style={{ width: "200px", height: "100px" }}
              />
            </div>
            <div className="col-7 text-start">
              <h6>
                Name : {val.name.common}
                <span style={{ color: "#625d5d" }}>({val.name.official})</span>
              </h6>
              <h6>Capital : {val.capital}</h6>
              <h6>Region: {val.region}</h6>
              <h6>Population : {val.population}</h6>
              <h6>TimeZone : {val.timezones}</h6>
              <button
                className="btn btn-secondary mt-4"
                data-bs-dismiss="modal"
                onClick={() => dispach(removeCountry(val.ccn3))}
              >
                Close
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Details;

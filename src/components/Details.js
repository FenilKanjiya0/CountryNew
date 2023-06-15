import React from "react";
import { useSelector } from "react-redux";

const Details = ({ details }) => {
  const country = useSelector((state) => state.country.country);

  const singleDetails = country.filter((element) => element.ccn3 === details);
  return (
    <>
      <div className="row">
        <div className="col-5">
          <img
            alt="img"
            src={singleDetails[0]?.flags?.png}
            style={{ width: "200px", height: "100px" }}
          />
        </div>
        <div className="col-7 text-start">
          <h6>
            Name : {singleDetails[0]?.name?.common}
            <span style={{ color: "#625d5d" }}>
              ({singleDetails[0]?.name?.official})
            </span>
          </h6>
          <h6>Capital : {singleDetails[0]?.capital}</h6>
          <h6>Region: {singleDetails[0]?.region}</h6>
          <h6>Population : {singleDetails[0]?.population}</h6>
          <h6>TimeZone : {singleDetails[0]?.timezones}</h6>
          <button className="btn btn-secondary mt-4" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;

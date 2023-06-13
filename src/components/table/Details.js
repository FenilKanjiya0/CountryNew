import React from "react";

const Details = ({ data }) => {
  return (
    <>
      {data?.map((val, index) => {
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Details;

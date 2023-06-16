import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCountry, viewCountry } from "../../store/countrySlice";
import Details from "../Details";
import Search from "../search/Search";

const Listing = () => {
  const [details, setDetails] = useState();
  // const [view, setView] = useState('')
  const dispach = useDispatch();
  const { country, loading, error } = useSelector((state) => state.country);


  // dispach country list
  useEffect(() => {
    dispach(showCountry());
  },[]);


  // reset country list
  const handleReset = () => {
    dispach(showCountry());
  };

  const handleView = (ccn3) => {
    dispach(viewCountry(ccn3))
  }

  //box models
  const modelBox = (
    <div
      className="modal fade modal-lg"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Country Details
            </h5>
          </div>
          <div className="modal-body">
            <Details details={details} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="my-3">Country</h1>
      <Search />

      <button className="btn btn-warning my-3" onClick={handleReset}>
        Reset
      </button>

      {error && !loading && <h1>{error}</h1>}
      {!error ? (
        loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div className="container d-flex justify-content-center">
            <table className="table table-bordered w-75">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Flage</th>
                  <th scope="col">Name</th>
                  <th scope="col">Capital</th>
                  <th scope="col">Population</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              {country?.map((val, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          alt="img"
                          src={val.flags.png}
                          style={{ width: "50px", height: "30px" }}
                        />
                      </td>
                      <td>{val.name.common}</td>
                      <td>{val.capital}</td>
                      <td>{val.population}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => handleView(val.ccn3)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        )
      ) : null}

      {modelBox}
    </>
  );
};

export default Listing;

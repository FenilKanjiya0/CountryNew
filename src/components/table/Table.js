import React, { useState } from "react";
import axios from "axios";
import Details from "./Details";

const APIDETAILS = process.env.REACT_APP_API_KEY;

const Table = (props) => {
  const [viewData, setViewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // details apicall
  const getDetails = async (detailsName) => {
    try {
      setLoading(true);
      const res = await axios.get(`${APIDETAILS}/alpha/${detailsName}`);
      setViewData(res.data);
      setLoading(false);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  // model box content
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
            {error && !loading && <h5>{error}</h5>}
            {loading ? <h5>Loading...</h5> : <Details data={viewData} />}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
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
          {props?.data?.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
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
                        onClick={() => getDetails(val.ccn3)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>

      {/* modelBox */}
      {modelBox}
    </>
  );
};

export default Table;

import React from "react";
import Details from "./Details";
import { useDispatch } from "react-redux";
import { addCountry } from "../../store/countrySlice";

const Table = (props) => {
  const dispach = useDispatch();

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
            <Details />
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
              <tbody key={index}>
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
                      onClick={() => dispach(addCountry(val))}
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

      {/* modelBox */}
      {modelBox}
    </>
  );
};

export default Table;
